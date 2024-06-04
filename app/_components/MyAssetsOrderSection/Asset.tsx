import Flex from "@/components/Flex";
import { ThemedText } from "@/components/ThemedText";
import { Colors, globalStyles } from "@/constants/Styles";
import { View, StyleSheet } from "react-native";

const { secondary } = Colors.main;

export default function Asset() {
  return (
    <View style={globalStyles.container}>
      <Flex style={[styles.container, styles.row]}>
        <ThemedText type="sm" style={[styles.textHead, { flex: 2 }]}>
          Aset Saat Ini
        </ThemedText>
        <ThemedText type="sm" style={[styles.textHead, { flex: 1 }]}>
          Total
        </ThemedText>
        <ThemedText type="sm" style={[styles.textHead, { flex: 1 }]}>
          Tersedia
        </ThemedText>
      </Flex>
      <Flex style={[styles.container, styles.row]}>
        <View style={{ flex: 2 }}>
          <ThemedText>ETH</ThemedText>
          <ThemedText style={styles.textHead} type="xs">
            Etherium
          </ThemedText>
        </View>
        <View style={{ flex: 1 }}>
          <ThemedText>0</ThemedText>
          <ThemedText style={styles.textHead} type="xs">
            IDR 0
          </ThemedText>
        </View>
        <View style={{ flex: 1 }}>
          <ThemedText>0</ThemedText>
          <ThemedText style={styles.textHead} type="xs">
            IDR 0
          </ThemedText>
        </View>
      </Flex>
      <Flex style={[styles.container, styles.row]}>
        <View style={{ flex: 2 }}>
          <ThemedText>IDR</ThemedText>
          <ThemedText style={styles.textHead} type="xs">
            Rupiah
          </ThemedText>
        </View>
        <View style={{ flex: 1 }}>
          <ThemedText>0</ThemedText>
        </View>
        <View style={{ flex: 1 }}>
          <ThemedText>0</ThemedText>
        </View>
      </Flex>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  row: {
    marginBottom: 5,
  },
  textHead: {
    color: secondary,
  },
});
