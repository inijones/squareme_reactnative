import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { colors } from '@/constants/theme'
import { useRouter } from 'expo-router'

const Index = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.replace("/onboarding");
        }, 4000)
    },[])

  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/images/squareme_logo.png")}
      />
    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.darkBlue
    },
    logo : {
        width: 300,
        height: 200
    }

})