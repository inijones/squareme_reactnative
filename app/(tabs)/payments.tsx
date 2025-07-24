import { StyleSheet, View } from 'react-native'
import React from 'react'
import PaymentMenu from '@/components/PaymentMenu'
import ScreenWrapper from '@/components/ScreenWrapper'

const payments = () => {
  return (
    <ScreenWrapper> 
      <PaymentMenu backgroundImage={require('../../assets/images/referral_bg.png')} />
    </ScreenWrapper>
    
  )
}

export default payments

const styles = StyleSheet.create({})

