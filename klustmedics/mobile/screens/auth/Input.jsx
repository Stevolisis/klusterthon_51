import { TextInput, Text, View } from "react-native";
import React from "react";

const Input = ({
  condition,
  styles,
  details,
  handleInput,
  type,
  placeholder,
  credentialType,
  keyboardType,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: condition ? "#27ae60" : "#bb3026",
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor="#F2F9F2"
        onChangeText={(text) => handleInput(text, type)}
        keyboardType={keyboardType}
      />
      <View style={styles.placeholderContainer}>
        <Text
          style={[
            styles.placeholder,
            {
              color: condition ? "#27ae60" : "#bb3026",
            },
          ]}
        >
          KlustMedics {credentialType}
        </Text>
      </View>
    </View>
  );
};

export default Input;
