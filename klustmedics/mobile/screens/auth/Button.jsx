import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Button = ({ styles, login, check }) => {
  return (
    <View style={[styles.width100, styles.alignCenter]}>
      <TouchableNativeFeedback onPress={login}>
        <Text
          style={[
            styles.button,
            {
              backgroundColor: check ? "#93a6c1" : "#328ECD",
            },
          ]}
        >
          Sign In
        </Text>
      </TouchableNativeFeedback>
      <TouchableOpacity>
        <Text style={styles.signInLink}>Need Help? Contact Support</Text>
      </TouchableOpacity>
      <Text style={styles.signInLink}>
        By signing in, you understand and agree to our Terms & Conditions and
        Privacy Policy
      </Text>
    </View>
  );
};

export default Button;
