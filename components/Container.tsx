import { ReactNode } from "react";
import {
  SafeAreaView,
  SafeAreaViewProps,
} from "react-native-safe-area-context";

type Props = {
  children: ReactNode;
} & SafeAreaViewProps;

export default function Container({ children, style, ...props }: Props) {
  return (
    <SafeAreaView {...props} style={[{ flex: 1 }, style]}>
      {children}
    </SafeAreaView>
  );
}
