import { StyleSheet, Text, ImageBackground, View } from "react-native";
import React from "react";
import image from "../../assets/control.png";
import { homeStyles } from "../../utils/homeStyles";

const SearchHeader = () => {
  return (
    <View
      style={[
        homeStyles.width100,

        {
          borderBottomRightRadius: 80,
          overflow: "hidden",
          height: "25%",
          backgroundColor: "red",
        },
      ]}
    >
      <ImageBackground
        style={[
          homeStyles.height100,
          // homeStyles.flex1,
          // homeStyles.alignCenter,
          // homeStyles.justifyCenter,
          // homeStyles.gap10,
          // homeStyles.padding12,
          homeStyles.width100,
        ]}
        source={image}
        resizeMode="cover"
      ></ImageBackground>
    </View>
  );
};

export default SearchHeader;
