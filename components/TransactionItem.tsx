import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

const TransactionItem = ({ 
  title, 
  subtitle, 
  amount, 
  onPress 
}: any) => {
  return (
    <TouchableOpacity style={styles.transactionItem} onPress={onPress}>
      <View style={styles.transactionIcon}>
        <Image source={require('../assets/images/message_icon.png')} style={styles.transactionIcon} resizeMode="contain" />
      </View>
      <View style={styles.transactionContent}>
        <Text style={styles.transactionTitle}>{title}</Text>
        <Text style={styles.transactionSubtitle}>{subtitle}</Text>
      </View>
      <View style={styles.transactionAmount}>
        <Text style={styles.amountText}>{amount}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  transactionIcon: {
    width: 20,
    height: 20,
    marginBottom: 16,
    marginRight: 16
  },
  transactionContent: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
    fontFamily: 'ClashGrotesk-Medium',
  },
  transactionSubtitle: {
    fontSize: 12,
    color: '#6b7280',
    fontFamily: 'ClashGrotesk-Regular',
  },
  transactionAmount: {
    alignItems: 'flex-end',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'ClashGrotesk-Medium',
  }, 
});




