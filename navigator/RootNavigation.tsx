import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";

export type RootStackParamList = {
  Main: undefined;
  MyModel: { userId: string; name: string };
  Order: { orderId: any };
};

const RootStack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigation} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigation;
