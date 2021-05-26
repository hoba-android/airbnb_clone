import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    position: "relative",
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

export default styles;
