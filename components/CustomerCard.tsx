import { View, Text } from "react-native";
import React from "react";
import useCustomerOrder from "../hooks/useCustomerOrder";
import { useTailwind } from "tailwind-rn/dist";
import { useNavigation } from "@react-navigation/native";
import { CutomerScreenNavigationProp } from "../screens/CutomerScreen";

type Props = {
  name: string;
  email: string;
  userID: string;
};

const CustomerCard = ({ name, email, userID }: Props) => {
  const { orders, loading, error } = useCustomerOrder(userID);
  const navigation = useNavigation<CutomerScreenNavigationProp>();
  const tw = useTailwind();
  return (
    <View>
      <Text>customerCard</Text>
    </View>
  );
};

export default CustomerCard;
