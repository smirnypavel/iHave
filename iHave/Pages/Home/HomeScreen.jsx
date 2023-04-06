import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import dataJson from "../..//Data/data.json";
import { ProductListComponent } from "../../components/ProductList/ProductList";
import { styles } from "../../Pages/Home/HomeScreenStyle";

const HomeScreen = () => {
  const navigation = useNavigation();
  const users = dataJson;

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer} style={styles.burgerButton}>
        <Text style={styles.burgerText}>≡</Text>
      </TouchableOpacity>
      <ProductListComponent products={users} />
    </View>
  );
};

export default HomeScreen;
