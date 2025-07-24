import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SectionHeader = ({ title, style }: any) => {
  return (
    <Text style={[styles.sectionTitle, style]}>{title}</Text>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'ClashGrotesk-Regular',
  },
});