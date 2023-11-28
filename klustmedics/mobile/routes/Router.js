import React, { Component } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/welcome/Welcome";
import Connect from "../screens/welcome/Connect";
import Control from "../screens/welcome/Control";
import SignInSplash from "../screens/auth/SignInSplash";
import SignIn from "../screens/auth/Signin";
import Home from "../screens/home/Home";
import BottomTabs from "./BottomTabs";
import Search from "../screens/search/Search";
import AddMedication from "../screens/search/drug/AddMedication";
import { useSelector } from "react-redux";
import ViewMedication from "../screens/search/edit/ViewMedication";

const MyStack = () => {
  const Stack = createNativeStackNavigator();
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Stack.Navigator>
      {!currentUser ? (
        <>
          <Stack.Screen
            name="Splash"
            component={Welcome}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="connect"
            component={Connect}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="control"
            component={Control}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="signinSplash"
            component={SignInSplash}
            options={{ headerShown: false, animation: "slide_from_right" }}
          />
          <Stack.Screen
            name="signin"
            component={SignIn}
            options={{ headerShown: false, animation: "slide_from_bottom" }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="home"
            component={BottomTabs}
            options={{ headerShown: false, animation: "slide_from_bottom" }}
          />
          <Stack.Group
            screenOptions={{
              headerShown: false,
              animation: "slide_from_left",
            }}
          >
            <Stack.Screen name="search" component={Search} />
            <Stack.Screen
              name="Medication"
              component={AddMedication}
              options={({ route }) => ({
                headerShown: true,
                animation: "fade_from_bottom",
                title: route.params?.item,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#328ecd",
                },
              })}
            />
            <Stack.Screen
              name="ViewMedication"
              component={ViewMedication}
              options={({ route }) => ({
                headerShown: true,
                animation: "fade_from_bottom",
                title: route.params?.name,
                headerTintColor: "#fff",
                headerStyle: {
                  backgroundColor: "#328ecd",
                },
              })}
            />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
};

export default MyStack;
