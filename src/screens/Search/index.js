import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import feed from "../../../assets/data/feed";
import Post from "../../components/Post";

const SearchResultsScreen = () => {
  return (
    <View>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Post post={item} />;
        }}
      />
    </View>
  );
};

export default SearchResultsScreen;

const styles = StyleSheet.create({});
