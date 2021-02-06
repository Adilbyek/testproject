import React from 'react';
import HomeScreen from './Source/Screens/HomeScreen';
import LoginScreen from './Source/Screens/LoginScreen';
import SignUpScreen from './Source/Screens/SignUp';
import FlatScreen from "./Source/Components/FlatList";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack=createStackNavigator();
export default function App() {
  return (  
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="FlatList" component={FlatScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

