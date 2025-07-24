import AuthFooter from '@/components/AuthFooter'
import CustomInput from '@/components/CustomInput'
import LogoWithHelpIcon from '@/components/LogoHelpIcon'
import Typo from '@/components/Typo'
import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TextInput, View } from 'react-native'

const CreateAccount = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LogoWithHelpIcon />
    
      <Typo style={styles.title}>Create an account</Typo>
      <Typo fontWeight={'300'} size={14} >Enter your phone number and we&apos;ll send an SMS with a code to verify your phone number</Typo>

      <Text style={styles.label}>Phone Number</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('../../assets/images/nigeria_flag.png')}
          style={styles.flag}
        />
        <TextInput
          style={styles.input}
          placeholder="080 0000 000"
          placeholderTextColor="#000"
          keyboardType="phone-pad"
        />
      </View>
      
      <CustomInput
        label="Referral Code (Optional)"
        placeholder="Enter code"
      />

      {/* By Signing up, you accept out Terms & Conditions */}
      <Text style={styles.termsText}>
        By signing up, you accept our <Text style={styles.termsLink}>Terms & Conditions</Text>
      </Text>

      <AuthFooter onLoginPress={() => {router.push('/verifyPhoneNumber')}} buttonText="Next" isLoginDisabled={false} onLogoutPress={() => {}} marginTop={150} />
      
    </View>
  )
}

export default CreateAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 40,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'ClashGrotesk-Medium',
        marginBottom: 10
    },
    label: {
      fontSize: 16,
      marginTop: 30,
      marginBottom: 10,
      fontWeight: '400',
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
    flag: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontWeight: '400',
    color: '#000',
    fontFamily: 'ClashGrotesk-Light',
  },
  termsText: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'ClashGrotesk-Regular',
    marginTop: 6,
  },
  termsLink: {
    color: '#9F56D4',
    fontFamily: 'ClashGrotesk-Regular',
  }
})