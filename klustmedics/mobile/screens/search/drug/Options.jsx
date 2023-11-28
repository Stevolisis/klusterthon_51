import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";

const Options = ({ selectedValue, setSelectedValue, data, text, item }) => {
  return (
    <View style={styles.inputContainer}>
      <Picker
        selectedValue={selectedValue[item]}
        onValueChange={(itemValue) => setSelectedValue(item, itemValue)}
      >
        {data.map((dosage, _index) => (
          <Picker.Item key={_index} label={dosage.label} value={dosage.value} />
        ))}
      </Picker>
      <View style={styles.placeholderContainer}>
        <Text style={[styles.placeholder]}>{text}</Text>
      </View>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    width: "100%",
    borderWidth: 1,
    borderColor: "#111",
    borderStyle: "solid",
    borderRadius: 12,
    marginTop: 16,
  },
  placeholderContainer: {
    position: "absolute",
    top: -10,
    left: 5,
    zIndex: 5,
    paddingHorizontal: 3,
    backgroundColor: "#fff",
  },
});
