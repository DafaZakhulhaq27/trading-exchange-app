import { ReactNode } from "react";
import {
  FlexAlignType,
  FlexStyle,
  Pressable,
  PressableProps,
  ViewStyle,
} from "react-native";
import { StyleSheet } from "react-native";

type Props = {
  children: ReactNode;
  direction?: FlexStyle["flexDirection"];
  items?: FlexAlignType;
  justify?: FlexStyle["justifyContent"];
  style?: ViewStyle;
} & PressableProps;

export default function Flex({
  items = "center",
  justify = "flex-start",
  direction = "row",
  children,
  style,
  ...props
}: Props) {
  return (
    <Pressable
      {...props}
      style={[
        styles.container,
        style,
        {
          flexDirection: direction,
          alignItems: items,
          justifyContent: justify,
        },
      ]}
    >
      {children}
    </Pressable>
  );
}

export const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
});
