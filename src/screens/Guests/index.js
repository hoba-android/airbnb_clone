import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [enfants, setEnfants] = useState(0);
  const navigation = useNavigation();
  return (
    <View
      style={{ justifyContent: "space-between", height: "100%", padding: 10 }}
    >
      <View>
        {/* //////////// row 1 /////////////// */}

        <View style={styles.row}>
          <View>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Adults</Text>
            <Text style={{ color: "grey" }}>Above 13</Text>
          </View>

          <View
            style={{
              flexDirection: "row",

              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable
              style={styles.button}
              onPress={() => setAdults(Math.max(0, adults - 1))}
            >
              <Text style={{ fontSize: 20 }}> - </Text>
            </Pressable>

            <Text style={{ fontSize: 20 }}>{adults}</Text>
            <Pressable
              style={styles.button}
              onPress={() => setAdults(adults + 1)}
            >
              <Text style={{ fontSize: 20 }}> + </Text>
            </Pressable>
          </View>
        </View>

        {/* //////////// row 2 /////////////// */}
        <View style={styles.row}>
          <View>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Children</Text>
            <Text style={{ color: "grey" }}>from 4 - 13 </Text>
          </View>

          <View
            style={{
              flexDirection: "row",

              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable
              style={styles.button}
              onPress={() => setChildren(Math.max(0, children - 1))}
            >
              <Text style={{ fontSize: 20 }}> - </Text>
            </Pressable>

            <Text style={{ fontSize: 20 }}>{children}</Text>
            <Pressable
              style={styles.button}
              onPress={() => setChildren(children + 1)}
            >
              <Text style={{ fontSize: 20 }}> + </Text>
            </Pressable>
          </View>
        </View>

        {/* //////////// row 3 /////////////// */}

        <View style={styles.row}>
          <View>
            <Text style={{ fontSize: 16, marginBottom: 5 }}>Enfants</Text>
            <Text style={{ color: "grey" }}>from 0 - 4</Text>
          </View>

          <View
            style={{
              flexDirection: "row",

              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable
              style={styles.button}
              onPress={() => setEnfants(Math.max(0, enfants - 1))}
            >
              <Text style={{ fontSize: 20 }}> - </Text>
            </Pressable>

            <Text style={{ fontSize: 20 }}>{enfants}</Text>
            <Pressable
              style={styles.button}
              onPress={() => setEnfants(enfants + 1)}
            >
              <Text style={{ fontSize: 20 }}> + </Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable
        onPress={() => navigation.navigate("Home")}
        style={{
          marginBottom: 20,
          backgroundColor: "#f15454",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          marginHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default GuestsScreen;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    paddingVertical: 20,
  },
  button: {
    width: 30,
    height: 30,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
  },
});
