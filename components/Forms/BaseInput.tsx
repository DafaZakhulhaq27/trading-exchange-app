import {
  View,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextInput,
} from "react-native";
import { ReactNode } from "react";
import { StyleSheet } from "react-native";

type Props = {
  prefix?: ReactNode;
  inputProps?: TextInputProps;
  containerStyle?: StyleProp<ViewStyle>;
  postfix?: ReactNode;
};

export default function BaseInput({
  prefix,
  postfix,
  inputProps,
  containerStyle,
}: Props) {
  return (
    <View style={[containerStyle, styles.container]}>
      {prefix && <View style={styles.prefix}>{prefix}</View>}
      <TextInput
        style={{
          paddingLeft: prefix ? 30 : 10,
          paddingRight: postfix ? 30 : 10,
          paddingVertical: 10,
        }}
        {...inputProps}
      />
      {postfix && <View style={styles.postfix}>{postfix}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  prefix: {
    left: 5,
    top: 8,
    position: "absolute",
  },
  postfix: {
    right: 5,
    top: 8,
    position: "absolute",
  },
  container: {
    borderRadius: 5,
    height: 36,
    position: "relative",
  },
});
