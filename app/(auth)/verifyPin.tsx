import { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field';
import AppButton from '@/components/AppButton'; // Adjust path if needed
import HeaderWithBack from '@/components/HeaderWithBack'; // Adjust path if needed
import Typo from '@/components/Typo';

const CELL_COUNT = 6;

export default function VerifyPin() {
  const router = useRouter();
  const { pin } = useLocalSearchParams();
  const [value, setValue] = useState('');
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

  const handleVerify = () => {
    if (value.length !== 6) {
      Alert.alert('Error', 'Please enter a 6-digit PIN');
      return;
    }

    if (value !== pin) {
      Alert.alert('PIN Mismatch', 'The PINs do not match. Please try again.');
      return;
    }

    // PINs match
    router.replace({
      pathname: '/success',
      params: {
        title: 'PIN Created Successfully!',
        message: 'You’ve successfully created your security PIN.',
        nextRoute: '/addBvn',
        buttonText: 'Continue',
      },
    });
  };

  return (
    <View style={styles.container}>
      <HeaderWithBack title="Confirm Your Pin" onBackPress={() => router.back()} />

        <Typo style={styles.title}>Set a six (6) digit pin that you would use for all transactions</Typo>


      <CodeField
        {...props}
        value={value}
        onChangeText={setValue}
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
            <Text style={styles.cellText}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
          </View>
        )}
      />

      <AppButton title="Confirm" onPress={handleVerify} style={{ marginTop: 500 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'ClashGrotesk-Light',
    marginTop: 30,
    marginBottom: 20
  },
  instruction: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginTop: 24,
    fontFamily: 'ClashGrotesk-Regular',
  },
  codeFieldRoot: {
    marginTop: 32,
    justifyContent: 'center',
  },
  cell: {
    width: 48,
    height: 48,
    lineHeight: 48,
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#F3F4F7',
    borderRadius: 8,
    textAlign: 'center',
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'ClashGrotesk-Regular',
    backgroundColor: '#F3F4F7',
  },
  cellText: {
    fontSize: 24,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});
