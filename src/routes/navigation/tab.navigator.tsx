import React, { useCallback, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator } from "./stack.navigator";
import Favorites from "../../pages/Favorites";
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import ScannProduct from "../../pages/ScannProduct";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const [longPressedScan, setLongPressedScan] = useState(true);
  const handleLongPressScann = useCallback(() => {
    setLongPressedScan(!longPressedScan);
  }, [longPressedScan])
  return (
    <Tab.Navigator tabBarOptions={{
      style: {
        elevation: 0,
        shadowOpacity: 0,
        height: 80,
        backgroundColor: '#F2F2F2',
        borderTopWidth: 0
      },
      tabStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      iconStyle: {
        flex: 0,
        width: 80,
        height: 80
      },
      labelStyle: {
        fontFamily: 'Archivo_700Bold',
        fontSize: 13,
        marginLeft: 16
      },
      inactiveBackgroundColor: 'transparent',
      activeBackgroundColor: 'transparent',
      inactiveTintColor: '#ADADAF',
      activeTintColor: '#606C38',
      showLabel: false,
    }}>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <MaterialCommunityIcons name="home" size={size} color={focused ? '#606C38' : color} />
            )
          }
        }}
      />
      <Tab.Screen
        name="ScanProduct"
        // component={ScannProduct}
        children={() => <ScannProduct isLongPressed={longPressedScan}/>}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <TouchableOpacity onLongPress={() => handleLongPressScann()}>
                <AntDesign name={longPressedScan ? 'scan1' : 'picture'}  size={size} color={focused ? '#606C38' : color} />
              </TouchableOpacity>
            )
          }
        }}
      />
      <Tab.Screen
        name="Favorites" component={Favorites}
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <FontAwesome name="heart" size={size - 3} color={focused ? '#606C38' : color} />
            )
          }
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
