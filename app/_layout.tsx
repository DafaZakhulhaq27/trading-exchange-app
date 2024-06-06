import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { Drawer } from "expo-router/drawer";
import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MarketDrawer from "./_components/MarketDrawer";
import { Dimensions } from "react-native";
import MarketHeader from "./_components/MarketDrawer/MarketHeader";
import { Market } from "@/constants/DummyData";
import { socket } from "@/utils/socket";
import { useMarketStore } from "./_stores/useMarketStore";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const updateMarketData = (
  oldData: Market[],
  newData: Omit<Market, "stocks">[]
) => {
  return oldData.map((market) => {
    const updatedMarket = newData.find(
      (newMarket) => newMarket.id === market.id
    );
    if (updatedMarket) {
      return {
        ...updatedMarket,
        stocks: market.stocks,
      };
    }

    return market;
  });
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { markets, selectedMarket, setMarkets, setSelectedMarket } =
    useMarketStore();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    function onConnect() {
      socket.on("markets", (e: string) => {
        const res = JSON.parse(e);

        const updatedMarkets = updateMarketData(markets, res);

        setMarkets(updatedMarkets);
      });
    }

    function onDisconnect() {
      console.log("disconnect");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  useEffect(() => {
    if (!markets.length) return;

    const updatedSelectedMarket = markets.find(
      (_) => _.id === selectedMarket?.id
    );

    if (updatedSelectedMarket) {
      setSelectedMarket({
        ...selectedMarket,
        ...updatedSelectedMarket,
      });
    }
  }, [JSON.stringify(markets), selectedMarket?.id]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
          screenOptions={{
            header: MarketHeader,
            drawerStyle: {
              width: Dimensions.get("window").width / 1.2,
            },
          }}
          drawerContent={MarketDrawer}
        />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
