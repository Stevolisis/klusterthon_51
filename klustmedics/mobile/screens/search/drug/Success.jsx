import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
const Success = ({ styles, navigation }) => {
  return (
    <LinearGradient
      colors={["#202933", "#202933"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={[
        {
          // ...StyleSheet.absoluteFillObject,
          padding: 12,
          flex: 1,
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
        },
      ]}
    >
      <View
        style={{
          alignItems: "center",
          gap: 18,
          backgroundColor: "#fff",
          width: "100%",
          padding: 20,
          borderrRadiusTop: 20,
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5 name="calendar-plus" size={24} color="black" />
        <Text style={{ textAlign: "center", fontSize: 24 }}>
          You have successfully added Paracetamol
        </Text>
        <View style={styles.width100}>
          <TouchableNativeFeedback>
            <Text
              style={[
                styles.button,
                styles.width100,
                {
                  backgroundColor: "#328ecd",
                  marginBottom: 24,
                },
              ]}
              onPress={() => [navigation.navigate("search")]}
            >
              Add another medication?
            </Text>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <Text
              style={[
                styles.button,
                styles.width100,
                {
                  backgroundColor: "transparent",
                  marginBottom: 24,
                  color: "#111",
                },
              ]}
              onPress={() => navigation.navigate("Home")}
            >
              Done
            </Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Success;
