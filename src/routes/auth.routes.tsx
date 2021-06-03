import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Sign from '../pages/Sign';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#F2F2F2' },
    }}
    initialRouteName="Sign"
  >
    <Auth.Screen name="SignIn" component={Sign} />
  </Auth.Navigator>
);

export default AuthRoutes;
