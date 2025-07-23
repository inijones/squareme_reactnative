import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
  userName?: string;
  //profileImage?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  userName = "David", 
  // profileImage 
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image 
          source={require("@/assets/images/david_profile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.greeting}>Hi {userName},</Text>
      </View>
      
      <View style={styles.rightSection}>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#4FC3F7' }]}>
          <Ionicons name="gift" size={14} color="white" />
          <View style={styles.notificationBadge} />
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: '#4FC3F7' }]}>
          <Ionicons name="add" size={14} color="white" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="notifications-outline" size={16} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#f8f9fa',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  greeting: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333',
    fontFamily: 'ClashGrotesk-Medium',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 6,
    backgroundColor: '#FF5722',
  },
});

export default Header;