import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PaymentOptionCard from './PaymentOptionCard';
import TransactionItem from './TransactionItem';
import SectionHeader from './SectionHeader';
import ReferralCard from './ReferralCard';

export default function PaymentMenu({ 
  backgroundImage, // Pass your background image here
  onSendMoney,
  onRequestMoney,
  onTransactionPress,
  onSeeMorePress,
  onCopyReferralCode 
}: any) {
  const transactions = [
    {
      id: 1,
      title: "Withdrawal to Bank",
      subtitle: "009564985G GIFT OLUWAS......",
      amount: "₦ 30,000.00",
      iconName: "chatbubble-outline"
    }
    // Add more transactions here
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Payments</Text>
      </View>

      {/* Payment Options */}
      <View style={styles.paymentOptions}>
        <PaymentOptionCard
          title="Send Money"
          description="Send money to anyone instantly"
          iconName="arrow-forward"
          iconColor="#2563eb"
          backgroundColor="#eff6ff"
          iconBackgroundColor="#dbeafe"
          onPress={onSendMoney}
        />
        
        <PaymentOptionCard
          title="Request Money"
          description="Request money from your friends and family"
          iconName="arrow-back"
          iconColor="#16a34a"
          backgroundColor="#f0fdf4"
          iconBackgroundColor="#F2FAEB"
          onPress={onRequestMoney}
        />
      </View>

      {/* Recent Transactions */}
      <View style={styles.transactionsSection}>
        <SectionHeader title="Recent transactions" />
        
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            title={transaction.title}
            subtitle={transaction.subtitle}
            amount={transaction.amount}
            iconName={transaction.iconName}
            onPress={() => onTransactionPress?.(transaction)}
          />
        ))}

        <TouchableOpacity style={styles.seeMoreButton} onPress={onSeeMorePress}>
          <Text style={styles.seeMoreText}>See more</Text>
          <Ionicons name="chevron-forward" size={12} color="#6b7280" />
        </TouchableOpacity>
      </View>

      {/* Referral Card */}
      <View style={styles.referralSection}>
        <ReferralCard
          title="Refer your friends and earn rewards"
          description="Refer your friends using your username/tag and earn rewards on each referral"
          buttonText="Copy referral code"
          backgroundImage={backgroundImage}
          onButtonPress={onCopyReferralCode}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'ClashGrotesk-Medium',
  },
  paymentOptions: {
    marginBottom: 16,
  },
  transactionsSection: {
    marginBottom: 16,
  },
  seeMoreButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  seeMoreText: {
    fontSize: 10,
    color: '#6b7280',
    marginRight: 4,
    fontFamily: 'ClashGrotesk-Regular',
  },
  referralSection: {
    marginBottom: 16,
  },    
});