import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Pressable,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          width: "100%",
          position: "absolute",
          top: 20,
          zIndex: 200,
        }}
      >
        <Pressable
          style={styles.searchbutton}
          onPress={() => navigation.navigate("Destinatio Search")}
        >
          <Ionicons name="ios-search" size={24} color="black" />
          <Text style={styles.searchbuttonText}>Where to go</Text>
        </Pressable>
      </View>

      <ImageBackground
        style={styles.bgImage}
        source={require("../../../assets/images/bg.jpg")}
      >
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn("expoore clicked")}
        >
          <Text style={styles.buttonText}>Explore Nearby Stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 90,
    fontWeight: "bold",
    marginLeft: 40,
    width: "70%",
  },
  button: {
    backgroundColor: "white",
    width: 200,
    borderRadius: 10,
    marginLeft: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
  searchbutton: {
    backgroundColor: "white",
    height: 50,
    width: Dimensions.get("screen").width - 20,
    borderRadius: 30,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchbuttonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black",
  },
});
