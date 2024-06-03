import { ThemedText } from "@/components/ThemedText";
import {
  DrawerContentComponentProps,
  useDrawerStatus,
} from "@react-navigation/drawer";
import { FlatList, Keyboard, View } from "react-native";
import MarketSort from "./MarketSort";
import { StyleSheet } from "react-native";
import MarketItem from "./MarketItem";
import { useEffect } from "react";
import SearchInput from "@/components/Forms/SearchInput";
import Flex from "@/components/Flex";
import { Colors, globalStyles } from "@/constants/Styles";
import useMarket from "@/app/_hooks/useMarket";
import Container from "@/components/Container";

export default function MarketDrawer(props: DrawerContentComponentProps) {
  const { onSelectMarket, data, search, _onSearch, _onSort } = useMarket();

  const isDrawerOpen = useDrawerStatus() === "open";

  useEffect(() => {
    if (!isDrawerOpen) {
      Keyboard.dismiss();
    }
  }, [isDrawerOpen]);

  return (
    <Container>
      <View style={globalStyles.container}>
        <ThemedText>Market</ThemedText>
        <SearchInput placeholder="Search Assets" onChangeText={_onSearch} />
        <MarketSort onChange={_onSort} />
      </View>
      <FlatList
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 20 }}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(v) => (
          <MarketItem
            onClick={(v) => {
              if (onSelectMarket) {
                onSelectMarket(v);
              }
              props.navigation.closeDrawer();
            }}
            {...v.item}
          />
        )}
        ListEmptyComponent={
          <Flex direction="column">
            <ThemedText style={styles.notFoundTitle}>
              "{search}" Not Found
            </ThemedText>
            <ThemedText style={styles.notFoundDesc} type="sm">
              Invalid keyword or assets is not available
            </ThemedText>
          </Flex>
        }
      />
    </Container>
  );
}

export const styles = StyleSheet.create({
  notFoundTitle: {
    fontWeight: "bold",
  },
  notFoundDesc: {
    color: Colors.main.secondary,
  },
});
