import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import CustomTabs from '@/components/CustomTabs'

const _layout = () => {
  return (
    <Tabs tabBar={CustomTabs} screenOptions={{ headerShown: true }}>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="payments" />
      <Tabs.Screen name="more" />
      <Tabs.Screen name="profile" />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})