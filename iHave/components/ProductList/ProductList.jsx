import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

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

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  itemTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  itemDescriptionContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
  },
  itemDescription: {
    fontSize: 16,
  },
});
