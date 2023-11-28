import {
  View,
  ScrollView,
  Dimensions,
  BackHandler,
  RefreshControl,
} from "react-native";
import React, { useCallback } from "react";
import { homeStyles } from "../../utils/homeStyles";
import HomeHeader from "../../components/HomeHeader";
import HomeBody from "../../components/HomeBody";
import { useFocusEffect } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { getMedications, getPatientProfile } from "../../utils/request";
import { useState } from "react";

const windowHeight = Dimensions.get("window").height;
const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [meds, setMeds] = useState([]);
  const { currentUser, currentUserDetails } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  useFocusEffect(
    useCallback(() => {
      const today = new Date();
      const dayNumber = today.getDate();
      const month = today.getMonth() + 1;
      const year = today.getFullYear();

      const getMeds = async () => {
        const req = await getMedications({
          token: currentUser?.data?.token,
          day: dayNumber,
          year,
          month,
        });
        const res = await req;
        setMeds(res);
      };
      getMeds();
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () => {
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
        getMeds();
      };
    }, [])
  );
  useFocusEffect(
    useCallback(() => {
      if (currentUserDetails === null)
        getPatientProfile(
          {
            token: currentUser?.data?.token,
          },
          dispatch
        );
    }, [])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    try {
      await getPatientProfile(
        {
          token: currentUser?.data?.token,
        },
        dispatch
      );
    } catch (error) {
    } finally {
      setRefreshing(false);
    }
  };

  return (
    <ScrollView
      style={[homeStyles.flex1]}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => onRefresh()}
          tintColor="red"
        />
      }
    >
      <View style={{ height: windowHeight * 0.2 }}>
        <HomeHeader details={currentUserDetails} />
      </View>

      <View style={{ height: windowHeight * 0.75 }}>
        <HomeBody
          setMeds={setMeds}
          meds={meds}
          navigation={navigation}
          height={windowHeight}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
