import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home/Home";
import { Ionicons } from "@expo/vector-icons";
import More from "../screens/more/More";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";

            return <Ionicons name={iconName} size={24} color={color} />;
          } else if (route.name === "resources") {
            iconName = focused ? "md-newspaper-sharp" : "md-newspaper-outline";
            return <Ionicons name={iconName} size={24} color={color} />;
          } else if (route.name === "report") {
            iconName = focused
              ? "ios-pie-chart-sharp"
              : "ios-pie-chart-outline";
            return <Ionicons name={iconName} size={24} color={color} />;
          } else if (route.name === "more") {
            iconName = focused
              ? "ellipsis-horizontal-sharp"
              : "ellipsis-horizontal-outline";
            return <Ionicons name={iconName} size={24} color={color} />;
          }
        },
        tabBarActiveTintColor: "#3498db",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="resources"
        component={Home}
        options={{
          tabBarLabel: "Resources",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="report"
        component={Home}
        options={{
          tabBarLabel: "Reports",
          headerShown: false,
          presentation: "modal",
        }}
      />
      <Tab.Screen
        name="more"
        component={More}
        options={{
          tabBarLabel: "More",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
