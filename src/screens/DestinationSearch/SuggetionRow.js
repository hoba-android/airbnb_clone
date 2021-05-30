import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons";

const SuggestionRow = ({ item, navigation }) => (
  <View style={styles.row}>
    <View style={styles.locationCont}>
      <Entypo name="location-pin" size={30} color="black" />
    </View>
    <Text>{item.description}</Text>
  </View>
);

export default SuggestionRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    height: 30,
    margin: 10,
    padding: 10,
    borderBottomColor: "lightgrey",

    alignItems: "center",
  },
  locationCont: {
    backgroundColor: "lightgrey",
    padding: 6,
    marginRight: 10,
    borderRadius: 10,
  },
});
