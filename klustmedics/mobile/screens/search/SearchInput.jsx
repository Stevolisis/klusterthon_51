import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { homeStyles } from "../../utils/homeStyles";
import { AntDesign } from "@expo/vector-icons";

const SearchInput = ({ setSearchText }) => {
  return (
    <View style={[homeStyles.searchView, homeStyles.width100]}>
      <TextInput
        placeholder="Search for medication"
        style={[homeStyles.searchInput]}
        placeholderTextColor="#737573"
        onChangeText={setSearchText}
      />
      <AntDesign name="search1" size={24} color="#737573" />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
