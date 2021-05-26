import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import { AntDesign } from "@expo/vector-icons";
import Router from "./src/navigation/Router";
import feed from "./assets/data/feed";

const post = feed[0];

export default function App() {
  return <Router />;
}
