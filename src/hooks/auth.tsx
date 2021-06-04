import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  SetStateAction,
  Dispatch,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar_url: string;
}
interface AuthState {
  token: string;
  user: User;
}
interface SignInCredentials {
  email: string;
  password: string;
}
interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  setLoading: Dispatch<SetStateAction<boolean>>
  updateUser(user: User): Promise<void>;
}
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const token = await AsyncStorage.getItem(
        '@VeganApp:token',
      );
      const user = await AsyncStorage.getItem('@VeganApp:user');

      if (token && user) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setData({ token: token, user: JSON.parse(user) });
      }

      setLoading(false);
    }
    loadStoragedData();
  }, []);
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth', {
      email,
      password,
    });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@VeganApp:token', String(token)],
      ['@VeganApp:user', JSON.stringify(user)],
    ]);
    api.defaults.headers.Authorization = `Bearer ${token}`;
    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@VeganApp:user', '@VeganApp:token']);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      await AsyncStorage.setItem('@VeganApp:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut, setLoading, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};
function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
export { AuthProvider, useAuth };
