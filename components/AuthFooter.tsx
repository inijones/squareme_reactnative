import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AuthFooter = ({
  buttonText = 'Log in',
  onLoginPress,
  isLoginDisabled,
  onLogoutPress,
  version = 'v2.5.501',
  username = 'John',
  marginTop = 350, // default fallback value
}: any) => {
  return (
    <View style={[styles.buttonContainer, { marginTop }]}>
      <TouchableOpacity
        style={[styles.loginButton, isLoginDisabled && { opacity: 0.3 }]}
        disabled={isLoginDisabled}
        onPress={onLoginPress}
      >
        <Text style={styles.loginText}>{buttonText}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onLogoutPress}>
        <Text style={styles.link}>
          Not {username}? <Text style={{ color: '#9F56D4' }}>Log out</Text>
        </Text>
      </TouchableOpacity>

      <Text style={styles.version}>{version}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    // marginTop is now passed as a prop
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
    color: '#000080',
    fontSize: 12,
    marginTop: 12,
    fontFamily: 'ClashGrotesk-Regular',
  },
});

export default AuthFooter;
