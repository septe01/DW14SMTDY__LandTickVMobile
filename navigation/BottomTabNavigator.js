import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TabBarIcon from "../components/TabBarIcon";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import Ticket from "../screens/Ticket";
import Profile from "../screens/Profile";
import Payment from "../screens/Payment";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          )
        }}
      />
      <BottomTab.Screen
        name="Ticket"
        component={Ticket}
        options={{
          title: "Ticket",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="ticket-percent" />
          )
        }}
      />
      <BottomTab.Screen
        name="Payment"
        component={Payment}
        options={{
          title: "Payment",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="credit-card" />
          )
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="account" />
          )
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "LandTick";
    case "Ticket":
      return "My Ticket";
    case "Payment":
      return "Payment";
    case "Profile":
      return "Profile";
    case "Links":
      return "Links to learn more";
  }
}
