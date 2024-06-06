import Separator from "@/components/Separator";
import Tabs from "@/components/Tabs";
import { useState } from "react";
import { View } from "react-native";
import Graph from "./Graph";
import { ThemedText } from "@/components/ThemedText";
import Depth from "./Depth";
import Trades from "./Trades";
import Info from "./Info";

const tabsList = ["Grafik", "Depth", "Trades", "Info"];

const TabContent = ({ activeTab }: { activeTab: string }) => {
  switch (activeTab) {
    case "Grafik":
      return <Graph />;
    case "Depth":
      return <Depth />;
    case "Trades":
      return <Trades />;
    case "Info":
      return <Info />;
    default:
      return <ThemedText>Not Found</ThemedText>;
  }
};

export default function GraphSection() {
  const [activeTab, setActiveTab] = useState(tabsList[0]);

  return (
    <View>
      <Tabs tabs={tabsList} activeTab={activeTab} onChange={setActiveTab} />
      <TabContent activeTab={activeTab} />
      <Separator />
    </View>
  );
}
