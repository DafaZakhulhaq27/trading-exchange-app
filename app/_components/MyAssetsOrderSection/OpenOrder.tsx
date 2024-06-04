import Flex from "@/components/Flex";
import { ThemedText } from "@/components/ThemedText";

export default function OpenOrder() {
  return (
    <Flex justify="center">
      <ThemedText style={{ marginTop: 10 }}>No Open Order</ThemedText>
    </Flex>
  );
}
