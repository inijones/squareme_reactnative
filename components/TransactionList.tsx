import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case 'withdrawal': return 'arrow-up-circle';
      case 'deposit': return 'arrow-down-circle';
      case 'payment': return 'card';
      default: return 'swap-horizontal';
    }
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
              <Ionicons 
                name={getTransactionIcon(transaction.type)} 
                size={24} 
                color="#FF9800" 
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
          <Ionicons name="chevron-down" size={16} color="#9C27B0" />
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
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  viewAll: {
    fontSize: 14,
    color: '#9C27B0',
    fontWeight: '500',
  },
  transactionsList: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 15,
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
    borderRadius: 20,
    backgroundColor: '#FFF3E0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  transactionDetails: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  transactionSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  transactionAmount: {
    alignItems: 'flex-end',
  },
  amountText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  seeMoreButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    gap: 5,
  },
  seeMoreText: {
    fontSize: 14,
    color: '#9C27B0',
    fontWeight: '500',
  },
});

export default TransactionsList;