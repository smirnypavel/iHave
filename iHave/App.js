import React, { useState } from "react";
import { DefaultTheme, DarkTheme, Provider } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./Pages/LoginScreen/LoginScreen";
import SignUpScreen from "./Pages/SignUpScreen/SignUpScreen";
import HomeScreen from "./Pages/Home/HomeScreen";
import AddItemScreen from "./Pages/AddItem/AddItemScreen";
import ItemDetailsScreen from "./Pages/ItemDetailsScreen/ItemDetailsScreen";
import TabBar from "./components/TabBar/TabBar";
import { ProductView } from "./Pages/ProductView/ProductView";
import { SideBar } from "./components/SideBar/SideBar";

const Stack = createStackNavigator();

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const theme = isDarkTheme ? DarkTheme : DefaultTheme;
  const [user, setUser] = useState(1);

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          {!user ? (
            <>
              {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              {/* <Stack.Screen name="SideBar" component={SideBar} /> */}
              <Stack.Screen name="AddItem" component={AddItemScreen} />
              <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
              <Stack.Screen name="ProductView" component={ProductView} />
            </>
          )}
        </Stack.Navigator>
        {user && <TabBar />}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
