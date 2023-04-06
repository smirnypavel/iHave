import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./TabBarStyle";

const TabBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tabContainer}>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate("Home")}>
        <Ionicons name="home-outline" size={24} color="black" />
        <Text style={styles.tabLabel}>Домой</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate("Settings")}>
        <Ionicons name="settings-outline" size={24} color="black" />
        <Text style={styles.tabLabel}>Настройки</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate("AddItem")}>
        <Ionicons name="add-circle-outline" size={24} color="black" />
        <Text style={styles.tabLabel}>Добавить вещь</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabButton}
        onPress={() => navigation.navigate("SearchItem")}>
        <Ionicons name="search-outline" size={24} color="black" />
        <Text style={styles.tabLabel}>Поиск</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;
