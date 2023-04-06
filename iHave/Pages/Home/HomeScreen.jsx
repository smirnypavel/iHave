import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import dataJson from "../Data/data.json";
import { ProductListComponent } from "../../components/ProductList/ProductList";

const HomeScreen = () => {
  const navigation = useNavigation();
  const users = dataJson;
  return (
    <View style={styles.container}>
      <ProductListComponent products={users} />
      {/* <Text style={styles.heading}>
        Добро пожаловать в приложение обмена вещами!
      </Text>
      <Text style={styles.subheading}>Что вы хотите сделать?</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Посмотреть вещи</Text>
        </View>
        <TouchableOpacity
          // style={styles.tabButton}
          onPress={() => navigation.navigate("AddItem")}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Добавить вещь</Text>
          </View>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
  },
  subheading: {
    fontSize: 18,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    backgroundColor: "#008CBA",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    marginHorizontal: 10,
    alignItems: "center",
    shadowColor: "#c5c5c5",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 5, // Для Android
    backgroundColor: "#ffffff", // Цвет фона, чтобы тень не перекрывала компонент
  },
  buttonText: {
    color: "#060606",
    fontSize: 18,
    textAlign: "center",
  },
});

export default HomeScreen;
