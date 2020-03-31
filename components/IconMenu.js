import React from "react";
import { StyleSheet } from "react-native";
//color
import Colors from "../constants/Colors";
// icon
// import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const IconMenu = props => {
  return (
    <FontAwesome5
      name={props.nama}
      size={props.size ? props.size : 40}
      style={styles.icon}
      color={props.color}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    // marginBottom: -3
  }
});

export default IconMenu;
