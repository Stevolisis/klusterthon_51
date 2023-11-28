import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import image from "../../assets/connect.png";
import { styles } from "../../utils/WelcomeStyles";

const Connect = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={image}
        resizeMode="cover"
        transition={1000}
      />
      <View style={styles.subContainer}>
        <View style={{ gap: 6 }}>
          <Text style={styles.header}>
            Connect with Your Healthcare Provider
          </Text>
          <Text style={styles.text}>
            Your healthcare provider will give you a unique code to establish a
            secure connection. Link up for better care!
          </Text>
        </View>

        <TouchableWithoutFeedback>
          <Text
            onPress={() => navigation.push("signinSplash")}
            style={styles.button}
          >
            Let's go
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Connect;
