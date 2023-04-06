import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { styles } from "./AddItemStyle";

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

export default AddItemForm;
