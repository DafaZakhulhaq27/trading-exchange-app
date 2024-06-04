import { Colors, globalStyles } from "@/constants/Styles";
import { ThemedText } from "./ThemedText";
import Flex from "./Flex";
import { Pressable, StyleSheet } from "react-native";

const { secondary, dark } = Colors.main;

type Props = {
  activeTab: string;
  onChange: (v: string) => void;
  tabs: string[];
};

export default function Tabs({ activeTab, onChange, tabs }: Props) {
  return (
    <Flex style={[globalStyles.containerHorizontal, styles.container]}>
      {tabs.map((tab, index) => (
        <Pressable
          onPress={() => {
            onChange(tab);
          }}
          key={index}
        >
          <ThemedText
            style={[
              styles.tabTitle,
              [
                {
                  color: tab === activeTab ? dark : secondary,
                  borderBottomWidth: tab === activeTab ? 2 : 0,
                },
              ],
            ]}
          >
            {tab}
          </ThemedText>
        </Pressable>
      ))}
    </Flex>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    borderBottomWidth: 0.5,
    borderColor: secondary,
  },
  tabTitle: {
    fontWeight: "600",
    paddingVertical: 8,
  },
});
