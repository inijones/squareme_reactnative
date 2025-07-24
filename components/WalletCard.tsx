import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface WalletCardProps {
  balance?: number;
  squaremeTag?: string;
}

const WalletCard: React.FC<WalletCardProps> = ({
  balance = 500000.0,
  squaremeTag = '@davidoloye22',
}) => {
  const formatCurrency = (amount: number) => {
    return `NGN ${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  };

  {/* Background Image */}
  return (
    <ImageBackground
      source={require('@/assets/images/wave_bg.png')} // 🟦 add your wave background image
      style={styles.card}
      imageStyle={{ borderRadius: 20 }}
    >

      {/* History Button */}
      <TouchableOpacity style={styles.historyButton}>
        <Text style={styles.historyText}>Transaction History</Text>
        <Ionicons name="chevron-forward" size={14} color="white" />
      </TouchableOpacity>

      <View style={styles.balanceSection}>
        <View style={styles.balanceHeader}>
          <Text style={styles.balanceLabel}>Wallet Balance</Text>
          <Ionicons name="eye-off-outline" size={16} color="white" />
        </View>
        <Text style={styles.balanceAmount}>{formatCurrency(balance)}</Text>
      </View>

      <View style={styles.squaremeSection}>
        <Text style={styles.squaremeText}>Squareme tag: {squaremeTag}</Text>
        <Ionicons name="copy-outline" size={18} color="#CE9CFF" marginLeft="10" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#000A4A',
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 16,
    marginBottom: 20,
    minHeight: 160,
    justifyContent: 'space-between',
  },
  historyButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  historyText: {
    color: 'white',
    fontSize: 12,
    marginRight: 4,
    fontFamily: 'ClashGrotesk-Regular',
  },
  balanceSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  balanceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  balanceLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 12,
    marginRight: 6,
    fontFamily: 'ClashGrotesk-Regular',
  },
  balanceAmount: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'ClashGrotesk-Medium',
  },
  squaremeSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  squaremeText: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 12,
    fontFamily: 'ClashGrotesk-Regular',
  },
});

export default WalletCard;

