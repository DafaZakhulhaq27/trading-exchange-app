import Tabs from "@/components/Tabs";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { View } from "react-native";
import Asset from "./Asset";
import OpenOrder from "./OpenOrder";

const tabsList = ["Aset", "Open Order (0)"];

const TabContent = ({ activeTab }: { activeTab: string }) => {
  switch (activeTab) {
    case "Aset":
      return <Asset />;

    case "Open Order (0)":
      return <OpenOrder />;
    default:
      return <ThemedText>Not Found</ThemedText>;
  }
};

export default function MyAssetOrder() {
  const [activeTab, setActiveTab] = useState(tabsList[0]);

  return (
    <View>
      <Tabs tabs={tabsList} activeTab={activeTab} onChange={setActiveTab} />
      <TabContent activeTab={activeTab} />
    </View>
  );
}
