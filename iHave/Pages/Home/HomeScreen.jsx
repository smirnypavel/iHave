import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import dataJson from "../..//Data/data.json";
import { ProductListComponent } from "../../components/ProductList/ProductList";
import { styles } from "../../Pages/Home/HomeScreenStyle";
import { SideBar } from "../../components/SideBar/SideBar";

const HomeScreen = () => {
  const navigation = useNavigation();
  const users = dataJson;

  const openSideBar = () => {
    navigation.navigate("SideBar");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openSideBar} style={styles.burgerButton}>
        <Text style={styles.burgerText}>☰</Text>
      </TouchableOpacity>
      <ProductListComponent products={users} />
    </View>
  );
};

export default HomeScreen;
