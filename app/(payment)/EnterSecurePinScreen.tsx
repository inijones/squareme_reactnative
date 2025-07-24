import AppButton from '@/components/AppButton';
import HeaderWithBack from '@/components/HeaderWithBack';
import Typo from '@/components/Typo';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CodeField, Cursor, useClearByFocusCell } from 'react-native-confirmation-code-field';

const CELL_COUNT = 6;


const EnterSecurePinScreen = () => {
    const [value, setValue] = useState('');
      const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });
      const router = useRouter();   

      const handleContinue = () => {
        if (value.length !== 6) {
          alert('Please enter a 6-digit PIN');
          return;
        }
        
        router.push({
          pathname: '/success',
          params: {
            title: 'Transaction Successful!',
            message: 'You have successfully sent  NGN 2,000.00 to Aderinsola. The recipient should get an alert shortly',
            nextRoute: '/',
            image: 'transfer',
        }
        });

      };

    return (
      <View style={styles.container}>
            <HeaderWithBack title="Set Your Security Pin" onBackPress={() => router.back()} />
        
            <Typo style={styles.title}>Enter your PIN to continue. Do not share your PIN with anyone,</Typo>

            <CodeField
                {...props}
                value={value}
                secureTextEntry={true}
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
                    <Text style={styles.cellText}>
                      {symbol ? '•' : isFocused ? <Cursor /> : null}
                    </Text>
                  </View>
                )}
            />

            <AppButton title="Done" onPress={handleContinue} style={{marginTop: "auto", marginBottom: 40}} />
      </View>
    )
}

export default EnterSecurePinScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        paddingTop: 60,
    },
     title: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: 'ClashGrotesk-Light',
        marginTop: 30,
        marginBottom: 20
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
        borderColor: '#000',
    },
    cellText: {
        color: '#000',
        fontSize: 24,
    },
})

