import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const AddItemForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");

  const handleAddItem = () => {
    if (!itemName || !itemDescription) {
      return;
    }
    const newItem = {
      name: itemName,
      description: itemDescription,
    };
    onAddItem(newItem);
    setItemName("");
    setItemDescription("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setItemName}
        value={itemName}
        placeholder="Enter item name"
      />
      <Text style={styles.label}>Description:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setItemDescription}
        value={itemDescription}
        placeholder="Enter item description"
      />
      <Button
        title="Add Item"
        onPress={handleAddItem}
        disabled={!itemName || !itemDescription}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    padding: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ccc",
  },
});

export default AddItemForm;
