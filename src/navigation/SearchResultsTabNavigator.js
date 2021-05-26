import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import SearcResultsScreen from "../screens/Search";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={SearcResultsScreen} />
      <Tab.Screen name="map" component={SearcResultsScreen} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;
