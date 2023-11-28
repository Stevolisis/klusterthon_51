import { Text, ImageBackground, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { EvilIcons } from "@expo/vector-icons";
import image from "../assets/control.png";
import profile from "../assets/profile.png";
import { homeStyles } from "../utils/homeStyles";

const HomeHeader = ({ details }) => {
  return (
    <View
      style={[
        homeStyles.width100,
        homeStyles.alignCenter,

        {
          borderBottomRightRadius: 80,
          overflow: "hidden",
          paddingRight: 12,
          paddingLeft: 12,
          flex: 1,
        },
      ]}
    >
      <ImageBackground
        style={[
          homeStyles.flex1,
          homeStyles.alignCenter,
          homeStyles.justifyCenter,
          homeStyles.gap10,
          homeStyles.padding12,
        ]}
        source={image}
        resizeMode="cover"
      >
        <View
          style={[
            homeStyles.justifyBetween,
            homeStyles.width100,
            homeStyles.row,
            homeStyles.alignCenter,
          ]}
        >
          <View
            style={[
              homeStyles.profileDiv,
              homeStyles.alignCenter,
              homeStyles.width75,
            ]}
          >
            <Image
              source={details?.img || profile}
              style={{ height: 48, width: 48, borderRadius: 50 }}
            />
            <View>
              <Text style={[homeStyles.white, homeStyles.profileGreeting]}>
                Good day
              </Text>
              <Text style={[homeStyles.white, homeStyles.profileName]}>
                {details?.full_name}
              </Text>
            </View>
          </View>
          <EvilIcons
            name="bell"
            size={24}
            color="#f2f2f2"
            style={homeStyles.icon}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeHeader;
