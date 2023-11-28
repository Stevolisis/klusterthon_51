import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Router from "../routes/Router";
import { NavigationContainer } from "@react-navigation/native";

export default function FullApp() {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
