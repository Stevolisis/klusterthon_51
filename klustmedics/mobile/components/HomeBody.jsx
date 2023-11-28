import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableNativeFeedback,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import image from "../assets/empty.png";
import { homeStyles } from "../utils/homeStyles";
import { AntDesign } from "@expo/vector-icons";
import { getMedications } from "../utils/request";
import { useSelector } from "react-redux";
const today = new Date();
const options = { weekday: "short" };
const dayNumber = today.getDate();

const futureDays = (index) => {
  const nextDay = new Date(today);

  nextDay.setDate(today.getDate() + index);
  const dayInWord = nextDay.toLocaleDateString("en-US", options).split(",")[0];

  if (dayInWord > 30) {
    dayInWord = dayInWord - 30;
  }

  return dayInWord;
};

const month = today.toLocaleDateString("en-US", { month: "long" });
const monthNum = today.getMonth() + 1;
const year = today.getFullYear();
const date = [
  {
    day: futureDays(0),
    dayNum: dayNumber,
    monthNum,
    tab: 1,
  },
  {
    day: futureDays(1),
    monthNum,
    tab: 2,
    dayNum: dayNumber,
  },
  {
    day: futureDays(2),
    monthNum,
    tab: 3,
    dayNum: dayNumber,
  },
  {
    day: futureDays(3),
    monthNum,
    tab: 4,
    dayNum: dayNumber,
  },
  {
    day: futureDays(4),
    monthNum,
    tab: 5,
    dayNum: dayNumber,
  },
  {
    day: futureDays(5),
    monthNum,
    tab: 6,
    dayNum: dayNumber,
  },
  {
    day: futureDays(6),
    monthNum,
    tab: 7,
    dayNum: dayNumber,
  },
];

const HomeBody = ({ navigation, meds, setMeds }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [tab, setTab] = useState(1);
  const getMeds = async ({ day, month }) => {
    const req = await getMedications({
      token: currentUser?.data?.token,
      day,
      year,
      month: month,
    });
    const res = await req;
    setMeds(res);
  };
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => [
          getMeds({ day: item.dayNum + index, month: item.monthNum }),
          setTab(item.tab),
        ]}
      >
        <View
          style={[
            styles.itemList,
            {
              backgroundColor: tab === item.tab ? "#D1EAFB" : "transparent",
              borderColor: tab === item.tab ? "#328ECD" : "#111",
              borderStyle: tab === item.tab ? "solid" : "dashed",
            },
          ]}
        >
          <Text>{item.day}</Text>
          <Text>
            {item.dayNum + index <= 30
              ? item.dayNum + index
              : item.dayNum + index - 30 === 0
              ? item.dayNum + index - 29
              : item.dayNum + index - 30}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.bodyContainer}>
      <View style={[homeStyles.alignCenter]}>
        <Text style={styles.monthName}>{month}</Text>
        <FlatList
          data={date}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          style={{ marginTop: 16 }}
        />
      </View>

      {meds.length === 0 && (
        <View style={[homeStyles.alignCenter, styles.welcome]}>
          <Image source={image} />
          <Text
            style={[
              homeStyles.font24,
              homeStyles.font700,
              { color: "#494949" },
            ]}
          >
            Welcome to Klust Medics
          </Text>
          <Text
            style={[
              homeStyles.textCenter,
              homeStyles.font16,
              { color: "#9DB2CE" },
            ]}
          >
            Add your medications to your schedule to receive timely alerts and
            stay on track with your treatment plan.
          </Text>
        </View>
      )}

      <ScrollView style={{ paddingHorizontal: 24 }}>
        {meds.length > 0 &&
          meds.map((med) => (
            <TouchableNativeFeedback
              onPress={() =>
                navigation.push("ViewMedication", {
                  id: med._id,
                  name: med.name,
                  number_of_pills: med?.number_of_pills,
                  timing: med?.timing,
                  frequency: med?.frequency,
                  duration: med?.duration,
                  time: med?.time,
                  dosage: med?.dosage,
                  type: med?.type,
                })
              }
            >
              <View style={{ flexDirection: "row", gap: 10, marginTop: 12 }}>
                <Text style={styles.time}>{med?.time} .</Text>

                <View
                  style={{
                    backgroundColor: "#cce5ee",
                    padding: 8,
                    borderRadius: 6,
                    width: "60%",
                  }}
                >
                  <Text style={styles.medName}>{med?.name}</Text>
                  <Text style={styles.medDesc}>
                    Take {med?.number_of_pills} pill {med?.timing}
                  </Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          ))}
      </ScrollView>

      <View style={{ position: "absolute", bottom: 12, right: 12 }}>
        <TouchableNativeFeedback onPress={() => navigation.navigate("search")}>
          <AntDesign style={styles.blue} name="plus" size={24} color="white" />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

export default HomeBody;

const styles = StyleSheet.create({
  bodyContainer: {
    marginTop: 12,
    gap: 40,
    flex: 1,
    position: "relative",
  },
  monthName: {
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    color: "#494949",
  },
  itemList: {
    gap: 4,
    height: 52,
    width: 40,
    borderWidth: 1,
    marginHorizontal: 5,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  welcome: {
    gap: 12,
    paddingHorizontal: 12,
  },
  blue: {
    padding: 15,
    backgroundColor: "#3da9fc",
    borderRadius: 50,
  },
  medName: {
    fontSize: 18,
    fontWeight: "700",
  },
  medDesc: {
    fontSize: 16,
  },
  time: {
    fontSize: 16,
  },
});
