import { Text, View, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import image from "../../assets/control.png";
import { styles } from "../../utils/WelcomeStyles";

const Control = ({ navigation }) => {
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
          <Text style={styles.header}>Take Control of Your Health</Text>
          <Text style={styles.text}>
            Manage your medications, set reminders, and improve your health
            journey today!
          </Text>
        </View>

        <TouchableWithoutFeedback>
          <Text
            onPress={() => navigation.push("connect")}
            style={styles.button}
          >
            Next
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Control;
