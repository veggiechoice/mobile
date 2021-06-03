import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../../pages/Dashboard";
import Profile from "../../pages/Profile";
import Product from "../../pages/Product";
import NoConnection from "../../pages/NoConnection";
import Favorites from "../../pages/Favorites";
import AddProduct from "../../pages/AddProduct";
import SearchPage from "../../pages/SearchPage";
import ChangeProfile from "../../pages/ChangeProfile";
import Map from "../../pages/Map";

const Stack = createStackNavigator();

const forFade = ({ current }: any) => ({
  cardStyle: {
    opacity: current.progress,

  },
});

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyleInterpolator: forFade,
    }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="NoConnection" component={NoConnection} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="ChangeProfile" component={ChangeProfile} />
      <Stack.Screen name="Map" component={Map} />
    </Stack.Navigator>
  );
}

export { MainStackNavigator };
