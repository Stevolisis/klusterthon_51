import React from "react";
import {
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  TouchableNativeFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import image from "../../assets/control.png";
import logo from "../../assets/logo.svg";
import { styles } from "../../utils/WelcomeStyles";

const SignInSplash = ({ navigation }) => {
  return (
    <ImageBackground
      source={image}
      style={{ height: "100%", width: "100%" }}
      resizeMode="cover"
      blurRadius={4}
    >
      <LinearGradient
        colors={["#202933", "transparent"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={styles.gradient}
      >
        <View style={styles.signinBody}>
          <View style={{ alignItems: "center" }}>
            <Image style={styles.signinLogo} source={logo} />
            <Text style={[styles.header, styles.white]}>KlustMedics</Text>
          </View>

          <View style={styles.subSigninBody}>
            <TouchableNativeFeedback>
              <Text
                style={styles.button}
                onPress={() => navigation.push("signin")}
              >
                Sign In
              </Text>
            </TouchableNativeFeedback>
            <TouchableOpacity>
              <Text style={styles.signInLink}>
                Register as a Healthcare Provider
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default SignInSplash;
