import {
  ScrollView,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import MoreHeader from "../../components/more/MoreHeader";
import { useDispatch, useSelector } from "react-redux";
import { homeStyles } from "../../utils/homeStyles";
import { AntDesign } from "@expo/vector-icons";
import { logoutFunc } from "../../redux/userSlice";

const windowHeight = Dimensions.get("window").height;

const More = () => {
  const { currentUserDetails } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <ScrollView style={[homeStyles.flex1]}>
      <View style={{ height: windowHeight * 0.3 }}>
        <MoreHeader details={currentUserDetails} />
      </View>

      <View
        style={[homeStyles.padding12, { gap: 16, height: windowHeight * 0.7 }]}
      >
        <View style={[styles.signout, { padding: 12 }]}>
          <AntDesign name="user" size={24} color="black" />
          <Text style={{ fontSize: 18, color: "#111" }}>
            Contact information
          </Text>
        </View>

        <TouchableOpacity onPress={() => dispatch(logoutFunc())}>
          <View
            style={[
              styles.signout,
              homeStyles.alignCenter,
              homeStyles.justifyCenter,
              {
                padding: 8,
              },
            ]}
          >
            <AntDesign name="login" size={18} color="#ff0000" />
            <Text style={{ fontSize: 16, color: "#ff0000" }}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default More;

const styles = StyleSheet.create({
  signout: {
    borderColor: "#d2d9d2",
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: "row",
    gap: 6,
  },
});
