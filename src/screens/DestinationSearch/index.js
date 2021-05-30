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

import SuggestionRow from "./SuggetionRow";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
const apikey = "AIzaSyDNAFr2EC_uqfyOtKXa0Z5Rs05N-6W2Iv4";

const LocationSerach = () => {
  const [inputText, setInputText] = useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={{ height: 500, width: 500 }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            navigation.navigate("Guests");
            console.log(data, details);
          }}
          renderRow={(item) => (
            <SuggestionRow item={item} navigation={navigation} />
          )}
          query={{
            key: apikey,
            language: "en",
            types: "(cities)",
          }}
        />
      </View>
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
});
