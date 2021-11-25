import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./screens/HomePage";
import SearchPage from "./screens/SearchPage";
import Login from "./screens/Login";
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/Signup";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Search" component={SearchPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
