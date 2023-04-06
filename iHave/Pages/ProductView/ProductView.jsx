import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const ProductView = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descriptionContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
  },
  description: {
    fontSize: 18,
  },
});
