import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CutomerScreen from "../screens/CutomerScreen";
import OrderScreen from "../screens/OrderScreen";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "@rneui/themed";
import { blue, gray, orange } from "../constants";

export type TabParamList = {
  Cutomer: undefined;
  Order: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigation = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: blue,
        tabBarInactiveTintColor: "gray",
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Cutomer") {
            return (
              <Icon name="users" type="entypo" color={focused ? blue : gray} />
            );
          } else if (route.name === "Order") {
            return (
              <Icon name="box" type="entypo" color={focused ? orange : gray} />
            );
          }
        },
      })}
    >
      <Tab.Screen name="Cutomer" component={CutomerScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
