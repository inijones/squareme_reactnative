import LogoWithHelpIcon from '@/components/LogoHelpIcon';
import { colors } from '@/constants/theme';
import * as LocalAuthentication from 'expo-local-authentication';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View, Keyboard } from 'react-native';
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;

const Login = () => {
  const [value, setValue] = useState('');
  const [showBiometrics, setShowBiometrics] = useState(false);
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

  const router = useRouter();

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
      router.push('/home');
    }
  };

  return (
    <View style={styles.container}>

      <LogoWithHelpIcon />
    

      <Text style={styles.welcome}>Welcome back John</Text>
      <Text style={styles.instruction}>Enter your PIN to access your Squareme account</Text>

      {/* Code Field */}
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
            <Text style={styles.cellText}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
          </View>
        )}
      />

      {/* Forgot PIN */}
      <Pressable>
          <Text style={styles.forgotPin}>Forgot PIN?</Text>
      </Pressable>
  

      {value.length === 0 && showBiometrics && (
        <TouchableOpacity style={styles.biometric} onPress={handleBiometricAuth}>
          <Text style={styles.biometricText}>🔒 Use Biometrics</Text>
        </TouchableOpacity>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity
        style={[styles.loginButton, value.length < CELL_COUNT && { opacity: 0.3 }]}
        disabled={value.length < CELL_COUNT}
        onPress={handleLogin}
        >
        <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Not John? <Text style={{ color: '##9F56D4' }}>Log out</Text></Text>
        </TouchableOpacity>

        <Text style={styles.version}>v2.5.501</Text>
      </View>
    
    </View>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 40,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  welcome: {
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'ClashGrotesk-Medium',
  },
  instruction: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'ClashGrotesk-Regular',
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
    fontFamily: 'ClashGrotesk-Medium',
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'ClashGrotesk-Medium',
  },
  link: {
    textAlign: 'center',
    marginTop: 16,
    color: '#555',
    fontSize: 14,
    fontFamily: 'ClashGrotesk-Regular',
  },
  version: {
    textAlign: 'center',
    color: colors.primary,
    fontSize: 12,
    marginTop: 12,
    fontFamily: 'ClashGrotesk-Regular',
  },
  buttonContainer: {
    marginTop: 350,
  },
  forgotPin: {
    textAlign: 'center',
    marginTop: 16,
    color: '#9F56D4',
    fontSize: 14,
    fontFamily: 'ClashGrotesk-Regular',
  },
});