import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

import Router from "./ExploreNavigator";

import HomeScreen from "../screens/home";

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: "red" }}>
      <Tab.Screen
        name="Explore"
        component={Router}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="search" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Saved"
        component={HomeScreen}
        options={{
          tabBarLabel: "Saved",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="heart" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Airbnb"
        component={HomeScreen}
        options={{
          tabBarLabel: "Airbnb",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="vector-triangle"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Messages"
        component={HomeScreen}
        options={{
          tabBarLabel: "Messages",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="android-messages"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-profile"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
