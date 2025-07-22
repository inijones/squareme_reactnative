import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const Login = () => {
  const [value, setValue] = useState('');
  const [showBiometrics, setShowBiometrics] = useState(false);
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

  useEffect(() => {
    const checkBiometrics = async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();

      if (compatible && enrolled) {
        setShowBiometrics(true);
      }
    };

    checkBiometrics();
  }, []);

  const handleBiometricAuth = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Use your fingerprint',
      fallbackLabel: 'Enter PIN',
    });

    if (result.success) {
      console.log('Biometric Auth Successful');
      // Navigate to app screen
    } else {
      console.log('Biometric Auth Failed');
    }
  };

  const handleLogin = () => {
    if (value.length === CELL_COUNT) {
      console.log('PIN entered:', value);
      // Validate PIN and proceed
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>squareme🚀</Text>

      <Text style={styles.welcome}>Welcome back John</Text>
      <Text style={styles.instruction}>Enter your PIN to access your Squareme account</Text>

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

      {value.length === 0 && showBiometrics && (
        <TouchableOpacity style={styles.biometric} onPress={handleBiometricAuth}>
          <Text style={styles.biometricText}>🔒 Use Biometrics</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity
        style={[styles.loginButton, value.length < CELL_COUNT && { opacity: 0.5 }]}
        disabled={value.length < CELL_COUNT}
        onPress={handleLogin}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.link}>Not John? <Text style={{ textDecorationLine: 'underline' }}>Log out</Text></Text>
      </TouchableOpacity>

      <Text style={styles.version}>v2.5.501</Text>
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  logo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B1B2F',
  },
  welcome: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 40,
  },
  instruction: {
    fontSize: 14,
    color: '#555',
    marginTop: 6,
  },
  codeFieldRoot: {
    marginTop: 24,
    justifyContent: 'center',
  },
  cell: {
    width: 48,
    height: 48,
    lineHeight: 48,
    fontSize: 24,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    textAlign: 'center',
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cellText: {
    fontSize: 24,
  },
  focusCell: {
    borderColor: '#000',
  },
  biometric: {
    marginTop: 32,
    alignItems: 'center',
  },
  biometricText: {
    fontSize: 16,
    color: '#444',
  },
  loginButton: {
    backgroundColor: '#000080',
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    textAlign: 'center',
    marginTop: 16,
    color: '#555',
  },
  version: {
    textAlign: 'center',
    color: '#aaa',
    fontSize: 12,
    marginTop: 12,
  },
});