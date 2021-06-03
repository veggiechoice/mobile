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
      // const token = await AsyncStorage.getItem(
      //   '@VeganApp:token',
      // );
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjI3NDc0NDEsImV4cCI6MTYyMzM1MjI0MSwic3ViIjoiYzdkMjQ4NjMtNjBjZi00ZDIzLTgzY2UtZGE4OTljZTRmMWIzIn0.XrhskQaMB7rrdzHAs7qDAbiYL7qaCzs8fLHlBPoSt3k";
      // const user = await AsyncStorage.getItem('@VeganApp:user');
      const user = {
        id: "c7d24863-60cf-4d23-83ce-da899ce4f1b3",
        name: "Gabriel",
        email: "teste@email.com",
        createdAt: "2021-06-03T17:18:55.851Z",
        updatedAt: "2021-06-03T17:18:55.851Z",
        address: null,
        avatar_url: "https://veggie-choice-app.s3.us-east-2.amazonaws.com/3ff840d762a192e2ff88-95b8227c645804af2d69-552A65E6-FD66-4573-9DC3-E3A0DC0898B8.JPG"
      };

      if (token && user) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setData({ token: token, user: user });
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
