import AppButton from '@/components/AppButton'
import HeaderWithBack from '@/components/HeaderWithBack'
import Typo from '@/components/Typo'
import { useRouter } from 'expo-router'
import React, { useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field'


const CELL_COUNT = 5;

const VerifyPhoneNumber = () => {
    const [value, setValue] = useState('');
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });

    const router = useRouter();
    

    return (
      <View style={styles.container}>
        <HeaderWithBack title="Verify Phone Number" onBackPress={() => router.back()} />

        {/* Image */}
        <View style={{ alignItems: 'center' }}>
            <Image 
                source={require("../../assets/images/kite_image.png")}
                style={styles.image}
            />
            <Typo style={styles.title}>Check your Whatsapp</Typo>
            <Typo fontWeight={'300'} size={12} style={{ textAlign: 'center' }} >Please input the five (5) digit code that was sent to your Whatsapp below</Typo>
        </View>
        {/* Code Field */}
        <CodeField
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                <Text style={styles.cellText}>{symbol || (isFocused ? <Cursor /> : null)}</Text>
              </View>
            )}
        />
        {/* Time: 30:00 Resend Code */}
        <View style={styles.timeContainer}>
            <Text style={styles.time}>Time: 30:00</Text>
            <Text style={styles.resendCode}>Resend Code</Text>
        </View>

        <AppButton 
            title="Verify" 
            onPress={() => {
                router.push({
                    pathname: '/success',
                    params: {
                      title: 'Verification Successful',
                      message: 'Your phone number has been verified successfully.',
                      nextRoute: '/enterPin',
                      buttonText: 'Continue',
                    },
                });
            }}  
            style={{ marginTop: 250 }} 
        />
        </View>
        )
    }

export default VerifyPhoneNumber

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        paddingTop: 40,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'ClashGrotesk-Medium',
        marginBottom: 10
    },
    codeFieldRoot: {
        marginTop: 24,
        justifyContent: 'center',
    },
    cell: {
      width: 48,
      height: 48,
      lineHeight: 48,
      fontSize: 24,
      borderWidth: 1,
      borderColor: '#F3F4F7',
      borderRadius: 8,
      textAlign: 'center',
      marginHorizontal: 6,
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'ClashGrotesk-Regular',
      backgroundColor: '#F3F4F7',
    },
    focusCell: {
      borderColor: '#000080',
    },
    cellText: {
      color: '#13004A',
    },
    time: {
      color: '#9F56D4',
      fontSize: 14,
      fontFamily: 'ClashGrotesk-Regular',
    },
    resendCode: {
      color: '#9F56D4',
      fontSize: 14,
      fontFamily: 'ClashGrotesk-Regular',
    },
    timeContainer: { 
      alignItems: 'center', 
      flexDirection: 'row',
      justifyContent: 'space-between', 
      marginTop: 30 
    }    
})