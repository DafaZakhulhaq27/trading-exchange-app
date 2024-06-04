import { StatusBar, View } from "react-native";
import GraphSection from "./_components/GraphSection";
import InfoSection from "./_components/InfoSection";
import OrderBookSection from "./_components/OrderBookSection";
import { ScrollView } from "react-native-gesture-handler";
import MyAssetOrderSection from "./_components/MyAssetsOrderSection";

export default function Home() {
  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar backgroundColor="white" />
      <InfoSection />
      <GraphSection />
      <OrderBookSection />
      <MyAssetOrderSection />
    </ScrollView>
  );
}
