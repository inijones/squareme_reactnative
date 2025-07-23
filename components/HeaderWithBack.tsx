import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // or use Feather/MaterialIcons

const HeaderWithBack = ({ title = 'Title', onBackPress }: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // aalign to the left
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  backButton: {
    marginRight: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: 'ClashGrotesk-Medium',
    color: '#13004A', // Matches the screenshot
  },
});

export default HeaderWithBack;
