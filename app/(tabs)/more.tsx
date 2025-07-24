import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper'
import MoreOptionCard from '@/components/MoreOptionCard'

const more = () => {
  return (
    <ScreenWrapper>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>More</Text>
        </View>

        {/* Content */}
        <View style={styles.moreOptions}>
          <MoreOptionCard
            title="Bill Payments"
            description="Pay all your bills on Squareme"
            icon={require('../../assets/images/pay_bill.png')} // Replace with your design asset
            iconBackgroundColor="#F1F6FE"
            onPress={() => console.log('Pay Bills')}
          />
          <MoreOptionCard
            title="Squareme POT"
            description= "Lock your funds away and earn interests"
            icon={require('../../assets/images/squareme_pot.png')} // Replace with your design asset
            iconBackgroundColor="#EEEEFF"
            onPress={() => console.log('Pay Bills')}
          />
          <MoreOptionCard
            title="Gift Cards"
            description="Select from your list of beneficiaries"
            icon={require('../../assets/images/gift.png')} // Replace with your design asset
            iconBackgroundColor="#FFF2E5"
            onPress={() => console.log('Pay Bills')}
          />
          <MoreOptionCard
            title="Cards"
            description="Virtual and Physical debit cards"
            icon={require('../../assets/images/card.png')} // Replace with your design asset
            iconBackgroundColor="#F6F0FF"
            onPress={() => console.log('Pay Bills')}
          />
          <MoreOptionCard
            title="Marketplace"
            description="Find your favourite Fundr vendors for easy payments"
            icon={require('../../assets/images/shop.png')} // Replace with your design asset
            iconBackgroundColor="#F1F2FE"
            onPress={() => console.log('Pay Bills')}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
   
  )
}

export default more

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    marginBottom: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'ClashGrotesk-Medium',
  },
  moreOptions: {
    marginBottom: 24,
  },
})