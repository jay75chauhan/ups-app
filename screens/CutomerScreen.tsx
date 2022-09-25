import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn";
import { StatusBar } from "expo-status-bar";
import {
  useNavigation,
  CompositeNavigationProp,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../navigator/TabNavigation";
import { RootStackParamList } from "../navigator/RootNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Input } from "@rneui/themed";
import { blue } from "../constants";
import { useQuery } from "@apollo/client";
import { GET_CUSTOMERS } from "../graphql/queries";
import CustomerCard from "../components/CustomerCard";

export type CutomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, "Cutomer">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CutomerScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CutomerScreenNavigationProp>();
  const [input, setInput] = useState("");
  const { data, loading, error } = useQuery(GET_CUSTOMERS);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    console.log(data?.getCustomers);
  });
  return (
    <ScrollView style={{ backgroundColor: blue }}>
      <StatusBar />
      <Image
        source={{
          uri: "https://links.papareact.com/3jc",
        }}
        containerStyle={tw("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input
        placeholder="Search by Cutomer"
        onChangeText={setInput}
        value={input}
        containerStyle={tw("bg-white pt-5 pb-0 px-5")}
      />

      {data?.getCustomers.map(
        ({ name: ID, value: { email, name } }: CustomerResponse) => (
          <CustomerCard key={ID} email={email} name={name} userID={ID} />
        )
      )}
    </ScrollView>
  );
};

export default CutomerScreen;
