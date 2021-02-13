import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./src/screens/HomeScreen";
import LoginScreen from "./src/screens/LoginScreen";
import FlexboxScreen from "./src/screens/FlexboxScreen";
import FlatListScreen from "./src/screens/FlatListScreen";
import CustomListScreen from "./src/screens/CustomListScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Flexbox" component={FlexboxScreen} />
        <Stack.Screen name="List" component={FlatListScreen} />
        <Stack.Screen name="CustomList" component={CustomListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
