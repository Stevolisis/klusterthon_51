import { Text, View, TouchableNativeFeedback, Alert } from "react-native";
import React, { useState } from "react";
import { styles } from "../../utils/WelcomeStyles";
import SearchHeader from "./SearchHeader";
import SearchInput from "./SearchInput";

const Search = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={{ flex: 1 }}>
      <SearchHeader />
      <View
        style={{
          height: "75%",
          justifyContent: "space-between",
        }}
      >
        <View style={{ padding: 12 }}>
          <Text style={styles.header}>
            Kindly provide the name of a medication you wish to add.
          </Text>
          <SearchInput setSearchText={setSearchText} />
        </View>

        <View
          style={[styles.width100, styles.alignCenter, { marginBottom: 16 }]}
        >
          <TouchableNativeFeedback
            onPress={() => [
              searchText.trim().length >= 4
                ? navigation.push("Medication", { item: searchText })
                : Alert.alert("Medication should not be less than 4"),
            ]}
          >
            <Text
              style={[
                styles.button,
                {
                  backgroundColor:
                    searchText.trim().length >= 4 ? "#328ecd" : "#93a6c1",
                },
              ]}
            >
              Next
            </Text>
          </TouchableNativeFeedback>
        </View>
      </View>
    </View>
  );
};

export default Search;
