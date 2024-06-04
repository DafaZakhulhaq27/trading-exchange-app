import Flex from "@/components/Flex";
import Separator from "@/components/Separator";
import { globalStyles } from "@/constants/Styles";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";
import { View } from "react-native";
import { StyleSheet } from "react-native";

export default function OrderBookSection() {
  return (
    <>
      <Flex style={[globalStyles.container, styles.container]}>
        <View style={styles.containerOrderForm}>
          <OrderForm />
        </View>
        <View style={styles.containerOrderList}>
          <OrderList />
        </View>
      </Flex>
      <Separator />
    </>
  );
}

export const styles = StyleSheet.create({
  container: {
    gap: 10,
    marginTop: 10,
  },
  containerOrderForm: {
    flex: 1.5,
  },
  containerOrderList: {
    flex: 1,
  },
});
