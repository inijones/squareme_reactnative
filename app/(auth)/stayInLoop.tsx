import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import AppButton from '@/components/AppButton'; // Ensure this points to your reusable button
import { useRouter } from 'expo-router';
import Typo from '@/components/Typo';

const MailInfoScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>

        <View style={styles.content}>
            {/* Top Mail Image */}
            <Image
              source={require('@/assets/images/mail_image.png')} // replace with your actual path
              style={styles.mailImage}
              resizeMode="contain"
            />
            {/* Justified Centered Text */}
            <Typo style={styles.infoTitle}>Stay in the Loop!</Typo>
            <Text style={styles.infoText}>
                Get ready to be the first to know about all the cool stuff happening at Squareme! From new features and product updates to exclusive offers and insider tips, we’ll make sure you’re always ahead of the curve. Excited to stay connected? Just hit the button below and let us keep you in the know!
            </Text>
        </View>
   

        {/* Bottom Button */}
        <View style={styles.footer}>
          <AppButton
            title="Open Mail App"
            onPress={() => {}}
            style={styles.button}
          />

          <Pressable onPress={() => router.back()} style={styles.pressable}>
            <Text style={styles.pressableText}>No, Thank You</Text>
          </Pressable>
        </View>
    </View>
  );
};

export default MailInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 80,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#13004A',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'ClashGrotesk-Semibold',
  },
  mailImage: {
    width: 150,
    height: 130,
    alignSelf: 'center',
    marginBottom: 30,
  },
  infoText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#120542',
    fontFamily: 'ClashGrotesk-Light',
    lineHeight: 20,
  },
  footer: {
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    marginBottom: 40,
    gap: 20,
  },
  pressable: {
    paddingVertical: 4,
  },
  pressableText: {
    color: '#13004A',
    fontSize: 14,
    fontFamily: 'ClashGrotesk-Medium',
  },
  button: {
    width: '100%',
    backgroundColor: '#000080',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
});

