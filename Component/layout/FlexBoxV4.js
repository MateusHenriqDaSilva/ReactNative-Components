import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default (props) => {
  return (
    <View style={style.FlexV4}>
      <View style={style.V0} />
      <View style={style.V1} />
      <View style={style.V2} />
    </View>
  );
};

const style = StyleSheet.create({
  FlexV4: {
    flexGrow: 1,
    width: 300,
    backgroundColor: "#000",
  },
  V0: {
    backgroundColor: "blue",
    height: 500,
  },
  V1: {
    backgroundColor: "green",
    flex: 5,
  },
  V2: {
    backgroundColor: "red",
    flex: 1,
  },
});
