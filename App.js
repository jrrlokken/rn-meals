import { useState } from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import MealsNavigator from "./navigation/MealsNavigator";

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-thin": require("./assets/fonts/Roboto-Thin.ttf"),
    "roboto-black": require("./assets/fonts/Roboto-Black.ttf"),
  });
};

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onError={(error) => console.log(error)}
        onFinish={() => setLoading(false)}
      />
    );
  }

  return <MealsNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
