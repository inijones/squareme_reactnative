import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const ReferralCard = ({
  title,
  description,
  buttonText,
  backgroundImage,
  onButtonPress,
}: any) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.referralCard}
      imageStyle={styles.cardBackgroundImage}
    >
      <View style={styles.referralContent}>
        <View style={styles.textBlock}>
          <Text style={styles.referralTitle}>{title}</Text>
          <Text style={styles.referralDescription}>{description}</Text>
          <TouchableOpacity style={styles.referralButton} onPress={onButtonPress}>
            <Text style={styles.referralButtonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};


export default ReferralCard;

const styles = StyleSheet.create({
  referralCard: {
    marginTop: 30,
    width: '100%',
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0D1C40', // fallback color
  },
  cardBackgroundImage: {
    resizeMode: 'cover',
  },
  referralContent: {
    flex: 1,
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
    maxWidth: '70%',
  },
  referralTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 8,
    fontFamily: 'ClashGrotesk-Semibold',
  },
  referralDescription: {
    fontSize: 10,
    color: '#FFFFFF',
    marginBottom: 12,
    fontFamily: 'ClashGrotesk-Regular',
  },
  referralButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  referralButtonText: {
    color: '#0D1C40',
    fontWeight: '600',
    fontSize: 14,
    fontFamily: 'ClashGrotesk-Medium',
  },
});
