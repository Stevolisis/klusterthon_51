import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const InputOptions = ({
  selectedValue,
  keyBoardType,
  setSelectedValue,
  text,
  item,
}) => {
  return (
    <View style={[styles.inputContainer]}>
      <TextInput
        keyboardType={keyBoardType}
        onChangeText={(text) => setSelectedValue(item, text)}
        value={selectedValue[item].toString()}
      />
      <View style={styles.placeholderContainer}>
        <Text style={[styles.placeholder]}>{text}</Text>
      </View>
    </View>
  );
};

export default InputOptions;

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    width: "100%",
    borderWidth: 1,
    borderColor: "#111",
    borderStyle: "solid",
    borderRadius: 12,
    marginTop: 16,
    padding: 12,
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
