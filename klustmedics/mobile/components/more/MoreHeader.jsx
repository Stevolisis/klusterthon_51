import { Text, ImageBackground, View } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { EvilIcons } from "@expo/vector-icons";
import image from "../../assets/control.png";
import profile from "../../assets/profile.png";
import { homeStyles } from "../../utils/homeStyles";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../../utils/WelcomeStyles";

const MoreHeader = ({ details }) => {
  return (
    <View
      style={[
        homeStyles.width100,
        homeStyles.alignCenter,

        {
          borderBottomRightRadius: 80,
          overflow: "hidden",
          flex: 1,
        },
      ]}
    >
      <LinearGradient
        colors={["#3d9cdc", "#3d9cdc"]}
        start={{ x: 0.5, y: 1 }}
        end={{ x: 0.5, y: 0 }}
        style={[
          homeStyles.flex1,
          homeStyles.alignCenter,
          homeStyles.justifyCenter,
          homeStyles.gap10,
          homeStyles.width100,
        ]}
      >
        <View
          style={[
            homeStyles.justifyBetween,
            homeStyles.width100,
            homeStyles.row,
            homeStyles.alignCenter,
            homeStyles.padding12,
          ]}
        >
          <View
            style={[homeStyles.alignCenter, homeStyles.width100, { gap: 12 }]}
          >
            <Image
              source={details?.img || profile}
              style={{ height: 90, width: 90, borderRadius: 50 }}
            />
            <View style={homeStyles.alignCenter}>
              <Text style={[homeStyles.white, homeStyles.profileName]}>
                {details?.full_name}
              </Text>
              <Text style={[homeStyles.white, homeStyles.profileName]}>
                User ID {details?._id}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default MoreHeader;
