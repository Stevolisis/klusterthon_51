import {
  ScrollView,
  Text,
  View,
  TouchableNativeFeedback,
  Button,
} from "react-native";
import React, { useState } from "react";
import Options from "./Options";
import { styles } from "../../../utils/WelcomeStyles";
import Success from "./Success";
import { useDispatch, useSelector } from "react-redux";
import InputOptions from "./InputOptions";
import DateTimePicker from "@react-native-community/datetimepicker";
import { addMed } from "./helper";

const dosage = [
  {
    label: "10mg",
    value: "10",
  },
  {
    label: "20mg",
    value: "20",
  },
  {
    label: "30mg",
    value: "30",
  },
  {
    label: "40mg",
    value: "40",
  },
  {
    label: "50mg",
    value: "50",
  },
];

const frequency = [
  {
    label: "Once a day",
    value: 1,
  },
  {
    label: "Twice daily",
    value: 2,
  },
  {
    label: "Three times daily",
    value: 3,
  },
  {
    label: "Four times daily",
    value: 4,
  },
];

const intakeTiming = [
  {
    label: "After meal",
    value: "after meal",
  },
  {
    label: "Before meal",
    value: "before meal",
  },
];

const AddMedication = ({ navigation, route }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [time, setTime] = useState(new Date());
  const [selectedValue, setSelectedValue] = useState({
    name: route?.params?.item,
    dosage: "",
    type: "",
    number_of_pills: "",
    timing: "",
    frequency: "",
    time: "",
    duration: "",
  });
  const [show, setShow] = useState(false);
  const [datePicker, setDatePicker] = useState(false);

  const onMedValChange = (name, val) => {
    setSelectedValue((prev) => ({ ...prev, [name]: val }));
  };

  const onChange = (selectedTime) => {
    const dateTime = new Date(selectedTime);
    const localTime = dateTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    onMedValChange("time", localTime);
    setDatePicker(false);
  };
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  return (
    <ScrollView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        position: "relative",
      }}
    >
      <Text style={[styles.header, { padding: 12 }]}>Medication Details</Text>
      <View style={{ paddingBottom: 16, padding: 12 }}>
        <Options
          selectedValue={selectedValue}
          setSelectedValue={onMedValChange}
          data={dosage}
          text={"Dosage Strength"}
          item={"dosage"}
        />
        <InputOptions
          selectedValue={selectedValue}
          setSelectedValue={onMedValChange}
          text={"Why are you taking this medication?"}
          item={"type"}
          keyBoardType={"default"}
        />
        <Options
          selectedValue={selectedValue}
          setSelectedValue={onMedValChange}
          data={frequency}
          text={"Frequency of intake"}
          item={"frequency"}
        />
        <InputOptions
          selectedValue={selectedValue}
          setSelectedValue={onMedValChange}
          text={"How many pills do you take?"}
          item={"number_of_pills"}
          keyBoardType={"numeric"}
        />
        <Options
          selectedValue={selectedValue}
          setSelectedValue={onMedValChange}
          data={intakeTiming}
          text={"Medication intake timing?"}
          item={"timing"}
        />
        <InputOptions
          selectedValue={selectedValue}
          setSelectedValue={onMedValChange}
          text={"Treatment duration in days"}
          item={"duration"}
          keyBoardType={"numeric"}
        />
        <View style={{ marginTop: 12 }}>
          <Button onPress={() => setDatePicker(true)} title="Select time" />
        </View>
        {datePicker && (
          <DateTimePicker
            value={time}
            onTouchCancel={() => setDatePicker(false)}
            mode="time"
            is24Hour={false}
            display="default"
            onChange={(event, selectedTime) => {
              if (selectedTime === undefined) {
                hideDatePicker();
              } else {
                onChange(selectedTime);
              }
            }}
          />
        )}
      </View>
      <TouchableNativeFeedback
        onPressIn={() => [addMed(selectedValue, navigation, currentUser)]}
      >
        <Text
          style={[
            styles.button,
            styles.width100,
            {
              backgroundColor: "#328ecd",
              marginBottom: 24,
            },
          ]}
        >
          Next
        </Text>
      </TouchableNativeFeedback>
      {show && (
        <Success styles={styles} navigation={navigation} setShow={setShow} />
      )}
    </ScrollView>
  );
};

export default AddMedication;
