import { View, ImageBackground, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import image from "../../assets/control.png";
import { styles } from "../../utils/WelcomeStyles";
import { Image } from "expo-image";
import logo from "../../assets/logo.svg";
import { loginUser } from "../../redux/login";
import { useDispatch } from "react-redux";
import { showMessage } from "react-native-flash-message";
import Overlay from "react-native-loading-spinner-overlay";
import Input from "./Input";
import Button from "./Button";

const SignIn = ({ navigation }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    code: "",
  });
  const emailPattern = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

  function validateEmail(email) {
    return emailPattern.test(email);
  }

  const handleInput = (text, name) => {
    setDetails((prev) => ({ ...prev, [name]: text }));
  };
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const check = details?.email?.trim() < 5 || details?.code?.trim().length < 4;

  const login = async () => {
    setShow(true);
    if (check) {
      showMessage({
        message: "Failure",
        description: "Credentials field not complete",
        type: "danger",
      });
      setShow(false);
      return false;
    } else if (validateEmail(details?.email.trim()) === false) {
      showMessage({
        message: "Failure",
        description: "Email format is wrong",
        type: "danger",
      });
      setShow(false);
      return false;
    } else {
      try {
        await loginUser(
          {
            activation_code: details?.code,
            email: details?.email,
          },
          dispatch
        );
        showMessage({
          message: "Login",
          description: "Login Successful",
          type: "success",
        });
        navigation.push("home");
      } catch (error) {
        console.log(error);
        showMessage({
          message: "Failure",
          description: "Wrong email or activation code",
          type: "danger",
        });
        setShow(false);
      }
    }
  };

  return (
    <View style={[styles.widthHeight100, styles.flex1]}>
      <ImageBackground
        source={image}
        style={[styles.backgroundImage, styles.width100]}
        resizeMode="cover"
        blurRadius={4}
      >
        <LinearGradient
          colors={["#202933", "transparent"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 2 }}
          style={[styles.width100, styles.height100]}
        >
          <Overlay
            visible={show}
            textContent={"Signing you in..."}
            textStyle={{ color: "#F7F7F7" }}
          />
          <View
            style={[styles.height45, styles.alignCenter, styles.justifyCenter]}
          >
            <Image style={styles.signinLogo} source={logo} />
          </View>
          <ScrollView
            style={[styles.signInForm, styles.width100]}
            contentContainerStyle={{ alignItems: "center" }}
          >
            <View style={[styles.signInFormView, styles.width100]}>
              <Input
                styles={styles}
                handleInput={handleInput}
                placeholder={"Enter email address"}
                details={details}
                type={"email"}
                credentialType={"email address"}
                keyboardType={"email-address"}
                condition={validateEmail(details?.email?.trim())}
              />
              {/* <Input
                styles={styles}
                handleInput={handleInput}
                details={details}
                type={"password"}
                placeholder={"Enter password"}
                credentialType={"password"}
                keyboardType={"default"}
                condition={details?.password?.trim().length >= 8}
              /> */}
              <Input
                styles={styles}
                handleInput={handleInput}
                details={details}
                type={"code"}
                placeholder={"Enter Access Code"}
                credentialType={"access code"}
                keyboardType={"numeric"}
                condition={details?.code?.trim().length >= 4}
              />

              <Button styles={styles} login={login} check={check} />
            </View>
          </ScrollView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default SignIn;
