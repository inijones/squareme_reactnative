import DestinationOption from '@/components/DestinationOption';
import Keypad from '@/components/Keypad';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ModalSheet from 'react-native-modal';

const SendMoneyScreen = () => {
  const [amount, setAmount] = useState('0');
  const [modalVisible, setModalVisible] = useState(false);

  const handleKeyPress = (key: string) => {
    if (key === '←') {
      setAmount(prev => prev.length > 1 ? prev.slice(0, -1) : '0');
    } else {
      setAmount(prev => (prev === '0' && key !== '.') ? key : prev + key);
    }
  };

  const handleProceed = () => {
    if (parseFloat(amount) > 0) {
      setModalVisible(true);
    }
  };

  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.balanceBox}>
        <Text style={styles.balanceLabel}>Wallet Balance</Text>
        <Text style={styles.balance}>₦5,200</Text>
      </View>

      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>Where do you want to send money?</Text>
      </TouchableOpacity>

      <Text style={styles.amount}>₦{amount}</Text>

      <Keypad onPress={handleKeyPress} />

      <TouchableOpacity 
        style={[styles.proceedButton, parseFloat(amount) === 0 && styles.disabledButton]} 
        onPress={handleProceed}
        disabled={parseFloat(amount) === 0}
      >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>

      <ModalSheet 
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
        style={styles.modal}
      >
        <View style={styles.sheet}>
          <Text style={styles.sheetTitle}>Where do you want to send money?</Text>
          <DestinationOption 
            title="Send to bank account" 
            icon={require('@/assets/images/bank_icon.png')} 
            onPress={() => {
              router.replace('./EnterBeneficiaryScreen')}
            } 
          />
          <DestinationOption 
            title="Send to a beneficiary" 
            icon={require('@/assets/images/user_check.png')} 
            onPress={() => {router.push('./EnterBeneficiaryScreen')}} 

          />
          <DestinationOption 
            title="Send using Squareme tag" 
            icon={require('@/assets/images/tag_at_icon.png')} 
            onPress={() => {router.push('./EnterBeneficiaryScreen')}} 

          />
          <DestinationOption 
            title="Send to contact list" 
            icon={require('@/assets/images/plus_icon.png')} 
            onPress={() => {router.push('./EnterBeneficiaryScreen')}} 
          />
        </View>
      </ModalSheet>
    </View>
  );
};

export default SendMoneyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0C2B',
    paddingTop: 60,
  },
  balanceBox: {
    backgroundColor: '#221E42',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  balanceLabel: {
    color: '#A0A0C0',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'ClashGrotesk-Regular',
  },
  balance: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    fontFamily: 'ClashGrotesk-Regular',
  },
  dropdown: {
    backgroundColor: '#532B88',
    marginHorizontal: 30,
    padding: 12,
    borderRadius: 8,
    marginBottom: 30,
  },
  dropdownText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'ClashGrotesk-Regular',
  },
  amount: {
    fontSize: 42,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'ClashGrotesk-Regular',
  },
  proceedButton: {
    backgroundColor: '#4A4A4A',
    padding: 16,
    borderRadius: 10,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#333',
  },
  proceedText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'ClashGrotesk-Medium',
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  sheet: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 24,
  },
  sheetTitle: {
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 20,
    marginBottom: 20,
    color: '#111',
    fontFamily: 'ClashGrotesk-Regular',
  },
});

