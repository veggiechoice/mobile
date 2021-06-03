import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from './navigation/drawer.navigator';
const App = createStackNavigator();

const AppRoutes: React.FC = () => <DrawerNavigator  />;

export default AppRoutes;
