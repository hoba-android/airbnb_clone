import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const url = "https://i.ytimg.com/vi/w39Mfu9YbBk/sddefault.jpg";
const Post = (props) => {
  const post = props.post;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: post.image }} />
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bed room
      </Text>

      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.newPrice}> ${post.newPrice}</Text> / night
      </Text>

      <Text style={styles.totalPrice}>${post.totalPrice}</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 30,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    borderRadius: 10,
    resizeMode: "cover",
  },
  bedrooms: {
    marginVertical: 10,
    fontSize: 14,
    color: "grey",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    marginVertical: 10,
  },
  oldPrice: {
    fontSize: 16,
    color: "grey",
    textDecorationLine: "line-through",
  },
  newPrice: {
    fontSize: 16,
  },
  totalPrice: {
    color: "grey",
    textDecorationLine: "underline",
  },
});
