import { showMessage } from "react-native-flash-message";
import { addMediacation } from "../../../utils/request";

export const addMed = async (selectedValue, navigation, currentUser) => {
  const isAnyEmpty = Object.values(selectedValue).some((val) => val === "");
  if (isAnyEmpty) {
    showMessage({
      message: "",
      description: "Makesure all fields are not empty",
      type: "danger",
    });
  } else {
    await addMediacation(
      {
        ...selectedValue,
      },
      { token: currentUser?.data?.token }
    );
    showMessage({
      message: "",
      description: "Medication added",
      type: "success",
    });
    navigation.push("home");
  }
};
