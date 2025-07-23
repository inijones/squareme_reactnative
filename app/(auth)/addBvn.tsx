import React from 'react';
import { View, StyleSheet } from 'react-native';
import WhyBvnInfo from '@/components/WhyBvnInfo';
import BvnAddInput from '@/components/BvnAddInput';
import AppButton from '@/components/AppButton';
import { useRouter } from 'expo-router';
import HeaderWithBack from '@/components/HeaderWithBack';

const AddBvnScreen = () => {
    const router = useRouter();

  return (
    <View style={styles.container}>
        <HeaderWithBack title="Provide your BVN" onBackPress={() => router.back()} />

        <BvnAddInput />
        <WhyBvnInfo />

        <AppButton 
          title="Submit" 
          onPress={() => router.replace('/stayInLoop')} 
          style={{marginTop: 250}} 
        />

    </View>
  );
};

export default AddBvnScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
