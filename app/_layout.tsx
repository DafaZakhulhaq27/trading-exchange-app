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
import MarketProviders from "./_providers/marketProviders";
import { dummyMarketData } from "@/constants/DummyData";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

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
      <MarketProviders dataMarket={dummyMarketData}>
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
      </MarketProviders>
    </ThemeProvider>
  );
}
