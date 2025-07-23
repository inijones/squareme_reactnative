// components/BvnAddInput.tsx
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Typo from './Typo';

const BvnAddInput = () => {

  return (
    <View style={styles.container}>


      <Typo style={styles.title}>Set a six (6) digit pin that you would use for all transactions</Typo>

      <Text style={styles.label}>BVN</Text>
      <TouchableOpacity style={styles.inputBox}>
        <AntDesign name="plus" size={16} color="#999" />
        <Text style={styles.inputText}>Click to add</Text>
      </TouchableOpacity>
    </View>

    
  );
};

export default BvnAddInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: '#000',
    fontFamily: 'ClashGrotesk-Light',
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'ClashGrotesk-Light',
    marginTop: 20,
    marginBottom: 30
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: '#F5F5FA',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  inputText: {
    //center text
    textAlign: 'center',
    marginLeft: 8,
    fontSize: 14,
    color: '#999',
    fontFamily: 'ClashGrotesk-Light',
  },
});
