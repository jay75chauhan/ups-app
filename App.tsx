import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwind-rn";
import CutomerScreen from "./screens/CutomerScreen";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigation from "./navigator/RootNavigation";
import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

const client = new ApolloClient({
  uri: "http://localhost:5001/api/ups",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    //@ts-ignore - TailwindProvider is not typed
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </TailwindProvider>
  );
}
