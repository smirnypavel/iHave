import React from "react";
import { View, Text } from "react-native";
import { styles } from "./ProductViewStyle";

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
