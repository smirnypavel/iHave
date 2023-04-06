import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

export const SideBar = () => {
  return (
    <View style={styles.container}>
      <Text>SideBar</Text>
      <TouchableNativeFeedback>
        <View style={styles.listContainer}>
          <Text style={styles.listText}>Login</Text>
        </View>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <View style={styles.listContainer}>
          <Text style={styles.listText}>SignIn</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: "100%",
    backgroundColor: "#F5FCFF",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  listContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  listText: {
    fontSize: 30,
    color: "#000",
    textAlign: "center",
    marginBottom: 10,
  },
});
