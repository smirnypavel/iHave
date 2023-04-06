import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ProductListStyle";

export const ProductListComponent = ({ products }) => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {products.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => navigation.navigate("ProductView", { product: item })}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemTitle}>{item.name}</Text>
            <View style={styles.itemDescriptionContainer}>
              <Text style={styles.itemDescription}>{item.email}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
