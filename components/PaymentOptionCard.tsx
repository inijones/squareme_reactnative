import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PaymentOptionCard = ({ 
  title, 
  description, 
  iconName, 
  iconColor, 
  iconBackgroundColor,
  onPress 
}: any) => {
  return (
    <TouchableOpacity 
      style={[styles.optionCard]}
      onPress={onPress}
    >
      <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
        <Ionicons name={iconName} size={18} color={iconColor} />
      </View>
      <View style={styles.optionContent}>
        <Text style={styles.optionTitle}>{title}</Text>
        <Text style={styles.optionDescription}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentOptionCard;

const styles = StyleSheet.create({
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
    marginTop: 10
  },
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionContent: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    fontFamily: 'ClashGrotesk-Medium',
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'ClashGrotesk-Regular',
  },
});

