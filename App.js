import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Code from "./screens/ScanScreen";

export default class App extends React.Component {
  render() {
    return(<Code/>);
  }
}

const TabNavigator = createBottomTabNavigator({
  QR: { screen: Code },
  
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});
;
