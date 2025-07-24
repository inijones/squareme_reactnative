import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import HeaderWithBack from '@/components/HeaderWithBack'
import { useRouter } from 'expo-router';
import AppButton from '@/components/AppButton';

const EnterBeneficiaryScreen = () => {
    const router = useRouter();

  return (
    <View style={styles.container}>
        <HeaderWithBack title="Send" onBackPress={() => router.back()} />

        <Text style={styles.label}>Enter Beneficiary Squareme tag</Text>
          <View style={styles.inputContainer}>
            <Image
              source={require('../../assets/images/tag_at_icon.png')}
              style={styles.tagAt}
            />
            <TextInput
              style={styles.input}
              placeholder="davidoloye"
              placeholderTextColor="#23262F"
              keyboardType="phone-pad"
            />
        </View>

        <Text style={styles.label}>Purpose of Sending (Optional)</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder=""
              placeholderTextColor="#23262F"
              keyboardType="phone-pad"
            />
        </View>
        <Text style={styles.label}>Amount</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="₦ 5000"
              placeholderTextColor="#23262F"
              keyboardType="phone-pad"
            />
        </View>


        <AppButton 
            title="Send Money" 
            onPress={
                () => {
                    router.push('./ConfirmTransactionScreen')
                }
            } 
            style={{ marginTop: 'auto', marginBottom: 40}} 
        />

      
    </View>
  )
}

export default EnterBeneficiaryScreen

const styles = StyleSheet.create({
     container: {
        flex: 1,
        padding: 24,
        paddingTop: 40,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 8,
        marginTop: 20,
        fontFamily: 'ClashGrotesk-Regular',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f6f8',
        borderRadius: 16,
        paddingHorizontal: 12,
        height: 60,
    },
    input: {
        flex: 1,
        padding: 8,
        fontSize: 16,
        fontFamily: 'ClashGrotesk-Regular',
    },
    tagAt: {
        width: 16,
        height: 16,
        marginRight: 8,
    },
})