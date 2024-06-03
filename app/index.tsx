import { Text, View } from "react-native";
import { useMarketContext } from "./_hooks/context";

export default function Home() {
  const { selectedMarket } = useMarketContext();

  return (
    <View>
      <Text>{selectedMarket?.name}</Text>
    </View>
  );
}
