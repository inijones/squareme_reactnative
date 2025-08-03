import AppButton from "@/components/AppButton";
import HeaderWithBack from "@/components/HeaderWithBack";
import Typo from "@/components/Typo";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Keyboard, StyleSheet, Text, View } from "react-native";
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const CELL_COUNT = 6;

const EnterPin = () => {
  const [value, setValue] = useState("");
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const router = useRouter();

  const handleContinue = () => {
    if (value.length !== 6) {
      alert("Please enter a 6-digit PIN");
      return;
    }

    router.push({ pathname: "/verifyPin", params: { pin: value } });
  };

  return (
    <View style={styles.container}>
      <HeaderWithBack
        title="Set Your Security Pin"
        onBackPress={() => router.back()}
      />

      <Typo style={styles.title}>
        Set a six (6) digit pin that you would use for all transactions
      </Typo>

      <CodeField
        {...props}
        value={value}
        onChangeText={(text) => {
          setValue(text);
          if (text.length === CELL_COUNT) {
            Keyboard.dismiss();
          }
        }}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />

      <AppButton
        title="Continue"
        onPress={handleContinue}
        style={{ marginTop: "500" }}
      />
    </View>
  );
};

export default EnterPin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 40,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 14,
    fontWeight: "400",
    fontFamily: "ClashGrotesk-Light",
    marginTop: 30,
    marginBottom: 20,
  },
  codeFieldRoot: {
    marginTop: 24,
    justifyContent: "center",
  },
  cell: {
    width: 48,
    height: 48,
    lineHeight: 48,
    fontSize: 24,
    borderWidth: 1,
    borderColor: "#F3F4F7",
    borderRadius: 8,
    textAlign: "center",
    marginHorizontal: 6,
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "ClashGrotesk-Regular",
    backgroundColor: "#F3F4F7",
  },
  focusCell: {
    borderColor: "#000080",
  },
  cellText: {
    fontSize: 24,
    color: "#000080",
  },
});
