import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./tab.navigator";
import { veganAppTheme } from '../../theme';
import { AntDesign, FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Profile from "../../pages/Profile";
const Drawer = createDrawerNavigator();
import ScannProduct from '../../pages/ScannProduct';
import Map from "../../pages/Map";


const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: '115%',
        backgroundColor: veganAppTheme.colors['green-500'],
        paddingRight: '15%',
        paddingTop: '10%' }}
      drawerContentOptions={{
        activeBackgroundColor: 'transparent',
        activeTintColor: veganAppTheme.colors['green-700'],
        inactiveTintColor: veganAppTheme.colors['neutral-100'],
        itemStyle: {
          borderBottomWidth:0.5,
          borderColor: '#eee',
          padding: 5,
          marginTop: 10,
          width: '100%'
        },
        labelStyle: {
          fontFamily: veganAppTheme.fonts['SFProRounded'],
          fontSize: 19,
          fontWeight: "bold"
        }
      }}
    >
      <Drawer.Screen
        name="Página inicial"
        component={TabNavigator}
        options={{
          drawerIcon: ({color, size, focused}) => {
            return (
              <MaterialCommunityIcons name="home" size={size} color={focused ? color : '#EEE'} />
            )
          },
        }}
      />
     <Drawer.Screen
        name="Perfil"
        component={Profile}
        options={{
          drawerIcon: ({color, size, focused}) => {
            return (
              <FontAwesome name="user-circle-o" size={size} color={focused ? '#283618' : color} />
            )
          }
        }}
      />
      <Drawer.Screen
        name="Escanear produto"
        component={ScannProduct}
        options={{
          drawerIcon: ({color, size, focused}) => {
            return (
              <AntDesign name="scan1"  size={size} color={focused ? '#283618' : color} />
            )
          }
        }}
      />
      <Drawer.Screen
        name="Importar rótulo"
        children={() => <ScannProduct isLongPressed={false}/>}
        options={{
          drawerIcon: ({color, size, focused}) => {
            return (
              <AntDesign name="clouduploado"  size={size} color={focused ? '#283618' : color} />
            )
          }
        }}
      />
      <Drawer.Screen
        name="Explorar Lojas / Supermercados"
        component={Map}
        options={{
          drawerIcon: ({color, size, focused}) => {
            return (
              <MaterialIcons name="explore" size={size} color={focused ? '#283618' : color} />
            )
          }
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
