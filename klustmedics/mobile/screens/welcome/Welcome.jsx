import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import image from "../../assets/get_started.png";
import { styles } from "../../utils/WelcomeStyles";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={image}
        resizeMode="cover"
        transition={1000}
      />
      <View style={styles.subContainer}>
        <View style={{ gap: 4 }}>
          <Text style={styles.header}>Welcome to KlustMedics</Text>
          <Text style={styles.text}>
            Your Personalized Medication Management Solution
          </Text>
        </View>

        <TouchableWithoutFeedback>
          <Text
            style={styles.button}
            onPress={() => navigation.push("control")}
          >
            Get Started
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Welcome;
