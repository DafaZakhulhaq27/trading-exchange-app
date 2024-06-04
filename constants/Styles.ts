/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { StyleSheet } from "react-native";

const dark = "black";
const secondary = "#A8A7A9";
const grey = "#E8E7E9";
const success = "#2AA366";
const danger = "#DD4446";

export const Colors = {
  main: {
    dark,
    secondary,
    success,
    danger,
    grey,
  },
  // TODO: adjust when light mode color ready
  light: {
    text: dark,
    background: "#fff",
  },
  // TODO: adjust when dark mode color ready
  dark: {
    text: dark,
    background: "#151718",
  },
};

export const Spacing = {
  baseHorizontalPadding: 20,
  baseVerticalPadding: 10,
};

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: Spacing.baseHorizontalPadding,
    paddingVertical: Spacing.baseVerticalPadding,
  },
  contanerVertical: {
    backgroundColor: "white",
    paddingVertical: Spacing.baseVerticalPadding,
  },
  containerHorizontal: {
    backgroundColor: "white",
    paddingHorizontal: Spacing.baseHorizontalPadding,
  },
});
