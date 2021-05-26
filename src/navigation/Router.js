import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Guests from "../screens/Guests";
import DestinationSearch from "../screens/DestinationSearch";

import HomeTabNavigator from "./HomeTabNavigator";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Destinatio Search"
          component={DestinationSearch}
          options={{ title: "search yalla" }}
        />
        <Stack.Screen name="Guests" component={Guests} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
