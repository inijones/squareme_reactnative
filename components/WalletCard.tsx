import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

interface WalletCardProps {
  balance?: number;
  squaremeTag?: string;
}

const WalletCard: React.FC<WalletCardProps> = ({ 
  balance = 500000.00, 
  squaremeTag = "@davidoloye22" 
}) => {
  const formatCurrency = (amount: number) => {
    return `NGN ${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1a237e', '#3949ab', '#5c6bc0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        <TouchableOpacity style={styles.historyButton}>
          <Text style={styles.historyText}>Transaction History</Text>
          <Ionicons name="chevron-forward" size={16} color="white" />
        </TouchableOpacity>
        
        <View style={styles.balanceSection}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceLabel}>Wallet Balance</Text>
            <Ionicons name="eye-off" size={16} color="white" />
          </View>
          <Text style={styles.balanceAmount}>{formatCurrency(balance)}</Text>
        </View>
        
        <TouchableOpacity style={styles.squaremeSection}>
          <Text style={styles.squaremeText}>Squareme tag: {squaremeTag}</Text>
          <Ionicons name="copy" size={16} color="white" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    minHeight: 180,
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  historyText: {
    color: 'white',
    fontSize: 14,
    marginRight: 5,
  },
  balanceSection: {
    flex: 1,
    justifyContent: 'center',
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  balanceLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
    marginRight: 8,
  },
  balanceAmount: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  squaremeSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  squaremeText: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
  },
});

export default WalletCard;