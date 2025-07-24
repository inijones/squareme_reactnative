import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import HeaderWithBack from '@/components/HeaderWithBack';

const ConfirmTransactionScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <HeaderWithBack title="Confirm Transaction" onBackPress={() => router.back()} />

      <Text style={styles.label}>
        Please confirm the details before you proceed as your money cannot be reversed once processed.
      </Text>

      {/* Amount Card */}
      <View style={styles.amountCard}>
        <Text style={styles.amountLabel}>Amount</Text>
        <Text style={styles.amountValue}>₦5,000</Text>
      </View>


      {/* Beneficiary Card */}
      <View style={styles.beneficiaryCard}>
        <View style={styles.rowBetween}>
          <Text style={styles.beneficiaryLabel}>Beneficiary Number:</Text>
          <Text style={styles.beneficiaryValue}>08000000000</Text>
        </View>
      
        <View style={styles.separator} />
      
        <View style={styles.rowBetween}>
          <Text style={styles.beneficiaryLabel}>Beneficiary:</Text>
          <Text style={styles.beneficiaryValue}>Mum</Text>
        </View>
      </View>

     {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.confirmButton}
          onPress={() => router.push('/EnterSecurePinScreen')}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default ConfirmTransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 40,
    backgroundColor: '#fff',
        justifyContent: 'flex-start',
  },
  label: {
    marginTop: 20,
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
    fontFamily: 'ClashGrotesk-Regular',
  },
  amountCard: {
    backgroundColor: '#000A4A',
    borderRadius: 12,
    height: 97,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  amountLabel: {
    color: '#A0AEC0',
    fontSize: 12,
    marginBottom: 4,
    fontFamily: 'ClashGrotesk-Regular',
  },
  amountValue: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'ClashGrotesk-Medium',
  },
  beneficiaryCard: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    marginBottom: 16,
  },
  beneficiaryLabel: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'ClashGrotesk-Regular',
  },
  beneficiaryValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginTop: 4,
    fontFamily: 'ClashGrotesk-Regular',
  },
  separator: {
    height: 1,
    backgroundColor: '#E2E2E2',
    marginVertical: 12,
  },
  beneficiaryName: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'ClashGrotesk-Regular',
  },
  buttonContainer: {
    marginTop: 'auto',
    marginBottom: 40,
    flexDirection: 'row',
    gap: 12,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#E2E2E2',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  cancelText: {
    color: '#000',
    fontSize: 14,
    fontFamily: 'ClashGrotesk-Medium',
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#000A4A',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
  },
  confirmText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'ClashGrotesk-Medium',
  },
  rowBetween: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 6,
},

});
