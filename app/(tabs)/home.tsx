import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import Header from '@/components/Header'
import WalletCard from '@/components/WalletCard'
import QuickActions from '@/components/QuickActions'
import TransactionsList from '@/components/TransactionList'
import SuggestedActions from '@/components/SuggestionAction'
   
const home = () => {
  return (
    <ScreenWrapper>
       <ScrollView showsVerticalScrollIndicator={false}>
         <Header />
         <WalletCard />
         <QuickActions />
         <TransactionsList />
         <SuggestedActions />
       </ScrollView>
   </ScreenWrapper>
  )
}

export default home
   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});
   
