/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const dark = "black";
const secondary = "#A8A7A9";
const success = "#2AA366";
const danger = "#DD4446";

export const Colors = {
  main: {
    dark,
    secondary,
    success,
    danger,
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
