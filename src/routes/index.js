import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Pages
import Login from '../pages/Login';
import Logged from '../pages/Logged';

const RootStack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="Logged" component={Logged} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}