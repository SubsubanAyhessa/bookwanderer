import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "./screens/HomePage";
import SearchPage from "./screens/PublishPage";
import Login from "./screens/Login";
import LoginScreen from "./screens/Login";
import SignUpScreen from "./screens/Signup";
import Inputs from "./screens/Inputs";
import PublishPage from "./screens/PublishPage";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Publish" component={PublishPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default MyStack;
