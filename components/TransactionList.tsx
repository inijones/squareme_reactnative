import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Transaction {
  id: string;
  type: 'withdrawal' | 'deposit' | 'payment';
  title: string;
  subtitle: string;
  amount: number;
  status: 'successful' | 'failed' | 'pending';
  date: string;
}

interface TransactionsListProps {
  transactions?: Transaction[];
}

const defaultTransactions: Transaction[] = [
  {
    id: '1',
    type: 'withdrawal',
    title: 'Withdrawal to bank',
    subtitle: 'August 07, 06:03 AM',
    amount: -5000,
    status: 'successful',
    date: '2024-08-07',
  },
  {
    id: '2',
    type: 'withdrawal',
    title: 'Withdrawal to bank',
    subtitle: 'August 07, 06:03 AM',
    amount: 5000,
    status: 'failed',
    date: '2024-08-07',
  },
];

const TransactionsList: React.FC<TransactionsListProps> = ({ 
  transactions = defaultTransactions 
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'successful': return '#4CAF50';
      case 'failed': return '#F44336';
      case 'pending': return '#FF9800';
      default: return '#666';
    }
  };

  const formatAmount = (amount: number) => {
    const prefix = amount > 0 ? '+ ' : '';
    return `${prefix}NGN ${Math.abs(amount).toLocaleString()}`;
  };

 

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.transactionsList}>
        {transactions.map((transaction) => (
          <TouchableOpacity key={transaction.id} style={styles.transactionItem}>
            <View style={styles.transactionIcon}>
              <Image 
                source={require('../assets/images/money_yellow.png')} 
                style={styles.iconImage} 
                resizeMode="contain" 
              />
            </View>
            
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>{transaction.title}</Text>
              <Text style={styles.transactionSubtitle}>{transaction.subtitle}</Text>
            </View>
            
            <View style={styles.transactionAmount}>
              <Text style={styles.amountText}>{formatAmount(transaction.amount)}</Text>
              <Text style={[styles.statusText, { color: getStatusColor(transaction.status) }]}>
                {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
        
        <TouchableOpacity style={styles.seeMoreButton}>
          <Text style={styles.seeMoreText}>See more</Text>
          <Ionicons name="chevron-down" size={14} color="#9C27B0" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'ClashGrotesk-Medium',
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  viewAll: {
    fontSize: 12,
    color: '#9C27B0',
    fontWeight: '500',
    fontFamily: 'ClashGrotesk-Regular',
  },
  transactionsList: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 12,

  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
    fontFamily: 'ClashGrotesk-Regular',
  },
  transactionSubtitle: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'ClashGrotesk-Light',
  },
  transactionAmount: {
    alignItems: 'flex-end',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
    fontFamily: 'ClashGrotesk-Regular',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: 'ClashGrotesk-Light',
  },
  seeMoreButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    gap: 5,
  },
  seeMoreText: {
    fontSize: 12,
    color: '#9C27B0',
    fontWeight: '500',
    fontFamily: 'ClashGrotesk-Regular',
  },
});

export default TransactionsList;