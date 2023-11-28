import { showMessage } from "react-native-flash-message";
import { addMediacation, editMedication } from "../../../utils/request";

export const editMed = async (selectedValue, navigation, currentUser, id) => {
  const isAnyEmpty = Object.values(selectedValue).some((val) => val === "");
  if (isAnyEmpty) {
    showMessage({
      message: "",
      description: "Makesure all fields are not empty",
      type: "danger",
    });
  } else {
    await editMedication(
      {
        ...selectedValue,
      },
      { token: currentUser?.data?.token, med_id: id }
    );
    showMessage({
      message: "",
      description: "Medication edited",
      type: "success",
    });
    navigation.push("home");
  }
};
