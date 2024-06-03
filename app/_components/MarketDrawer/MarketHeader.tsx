import { useMarketContext } from "@/app/_hooks/context";
import Flex from "@/components/Flex";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MarketHeader({ navigation }: DrawerHeaderProps) {
  const { selectedMarket } = useMarketContext();

  return (
    <SafeAreaView>
      <Flex style={styles.headerContainer} justify="space-between">
        <Pressable
          onPress={() => {
            navigation.toggleDrawer();
          }}
          style={styles.headerToggle}
        >
          <Ionicons name="reorder-three" size={22} />
          <ThemedText style={styles.titleMarket}>
            {selectedMarket?.name}
          </ThemedText>
          <ThemedText style={styles.currencyMarket}>
            /{selectedMarket?.currency}
          </ThemedText>
        </Pressable>
        <Ionicons name="ellipsis-vertical" size={20} />
      </Flex>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerToggle: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleMarket: {
    fontWeight: 600,
    marginLeft: 3,
  },
  currencyMarket: {
    fontWeight: 600,
    color: Colors.main.secondary,
  },
});
