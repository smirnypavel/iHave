import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
  burgerButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 9999,
  },
  burgerText: {
    fontSize: 32, // увеличиваем размер иконки бургер до 32
    color: "#000",
  },
});
