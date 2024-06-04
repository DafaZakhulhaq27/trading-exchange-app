import { Pressable, View } from "react-native";
import ButtonBuySell from "./ButtonBuySell";
import Select from "@/components/Forms/Select";
import { StyleSheet } from "react-native";
import { useState } from "react";
import FormInput from "@/components/Forms/FormInput";
import Flex from "@/components/Flex";
import { useMarketContext } from "@/app/_hooks/context";
import { Colors } from "@/constants/Styles";
import { Slider } from "@miblanchard/react-native-slider";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import useOrderForm, { TypeBooks, TypePosts } from "@/app/_hooks/useOrderForm";

const { danger, success, secondary, grey, dark } = Colors.main;

export default function OrderForm() {
  const {
    selectedMarket,
    currentAction,
    setCurrentAction,
    selectedTypeBook,
    setSelectedTypeBook,
    selectedPercentage,
    setSelectedPercentage,
    isPostOnly,
    setIsPostOnly,
    selectedTypePost,
    setSelectedTypePost,
    form,
    handleChange,
  } = useOrderForm();

  const isBuy = currentAction === "buy";

  return (
    <View style={styles.formContainer}>
      <ButtonBuySell onChange={setCurrentAction} />
      <Select
        defaultValue={selectedTypeBook}
        onSelect={(selectedItem) => {
          setSelectedTypeBook(selectedItem);
        }}
        data={TypeBooks}
      />

      <FormInput
        onChangeText={(v) => handleChange("price", v)}
        value={form.price?.toLocaleString()}
        label="Harga"
        placeholder="0"
        keyboardType="numeric"
      />
      <Flex
        style={{
          gap: 5,
        }}
      >
        <FormInput
          onChangeText={(v) => handleChange("amount", v)}
          value={form.amount?.toLocaleString()}
          label={`Jumlah (${selectedMarket?.name})`}
          placeholder="0"
          keyboardType="numeric"
        />
        <FormInput
          onChangeText={(v) => handleChange("total", v)}
          value={form.total?.toLocaleString()}
          label="Total (IDR)"
          placeholder="0"
          keyboardType="numeric"
        />
      </Flex>
      <Slider
        containerStyle={{ marginTop: 5, padding: 0, height: 10 }}
        maximumValue={100}
        minimumValue={0}
        step={25}
        onValueChange={(v) => {
          setSelectedPercentage(v[0]);
        }}
      />
      <ThemedText type="xs">{selectedPercentage}%</ThemedText>

      <Flex justify="space-between">
        <ThemedText style={styles.avaibleSaldoTitle} type="xs">
          Saldo Tersedia
        </ThemedText>
        <Flex>
          <ThemedText type="xs">IDR 0 </ThemedText>
          <Ionicons name="add-circle" color="blue" />
        </Flex>
      </Flex>

      <View style={styles.separator} />

      <Flex justify="space-between">
        <Flex onPress={() => setIsPostOnly((prev) => !prev)} style={{ gap: 5 }}>
          <Checkbox
            style={styles.checkbox}
            value={isPostOnly}
            onValueChange={setIsPostOnly}
            color={isPostOnly ? dark : undefined}
          />
          <ThemedText style={styles.postOnlyText} type="sm">
            Post-Only
          </ThemedText>
        </Flex>
        <View style={{ width: 80 }}>
          <Select
            defaultValue={selectedTypePost}
            onSelect={(selectedItem) => {
              setSelectedTypePost(selectedItem);
            }}
            data={TypePosts}
          />
        </View>
      </Flex>

      <Pressable
        style={[
          styles.buttonSubmit,
          {
            backgroundColor: isBuy ? success : danger,
          },
        ]}
      >
        <ThemedText style={styles.buttonSubmitText}>
          {isBuy ? "Beli" : "Jual"} ETH{" "}
        </ThemedText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSubmit: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 5,
    height: 45,
  },
  buttonSubmitText: {
    color: "white",
    fontWeight: "600",
  },
  formContainer: {
    gap: 10,
  },
  marketSlider: {
    width: 15,
    height: 15,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: secondary,
  },
  separator: {
    height: 1,
    backgroundColor: grey,
  },
  avaibleSaldoTitle: {
    color: secondary,
  },
  postOnlyText: {
    fontWeight: 600,
  },
  checkbox: {
    borderColor: dark,
    width: 16,
    height: 16,
  },
});
