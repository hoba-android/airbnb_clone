import React, { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import locations from "../../../assets/data/search";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const LocationSerach = () => {
  const [inputText, setInputText] = useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Ionicons name="ios-search" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder="Where are you going?"
          value={inputText}
          onChangeText={setInputText}
        />
      </View>

      <FlatList
        data={locations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Pressable
              style={styles.row}
              onPress={() => navigation.navigate("Guests")}
            >
              <View style={styles.locationCont}>
                <Entypo name="location-pin" size={30} color="black" />
              </View>
              <Text>{item.description}</Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default LocationSerach;

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  textInput: {
    fontSize: 20,
    marginLeft: 20,
  },
  inputView: {
    flexDirection: "row",
    height: 50,

    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
  },
  row: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    alignItems: "center",
  },
  locationCont: {
    backgroundColor: "lightgrey",
    padding: 6,
    marginRight: 10,
    borderRadius: 10,
  },
});
