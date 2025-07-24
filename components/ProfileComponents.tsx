import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Reusable Profile Header Component
export const ProfileHeader = ({ 
  profileImage, 
  name, 
  phoneNumber, 
  tier, 
  onProfilePress 
}: any) => {
  return (
    <TouchableOpacity style={styles.profileHeader} onPress={onProfilePress}>
      <Image source={profileImage} style={styles.profileImage} />
      <View style={styles.profileInfo}>
        <Text style={styles.profileName}>{name}</Text>
        <Text style={styles.profilePhone}>{phoneNumber}</Text>
      </View>
      <View style={styles.tierContainer}>
        <Text style={styles.tierText}>{tier}</Text>
        <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
      </View>
    </TouchableOpacity>
  );
};

// Reusable Menu Item Component
export const MenuItem = ({ 
  icon, 
  iconColor = '#8b5cf6', 
  title, 
  onPress,
  showChevron = true 
}: any ) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={[styles.menuIcon, { backgroundColor: `${iconColor}20` }]}>
        <Image source={icon} style={[styles.iconImage, { tintColor: iconColor }]} />
      </View>
      <Text style={styles.menuTitle}>{title}</Text>
      {showChevron && (
        <Ionicons name="chevron-forward" size={20} color="#9ca3af" style={styles.chevronIcon} />
      )}
    </TouchableOpacity>
  );
};

// Reusable Section Component
export const Section = ({ children, style }: any) => {
  return <View style={[styles.section, style]}>{children}</View>;
};

// Reusable Header Title Component
export const HeaderTitle = ({ title }: any) => {
  return <Text style={styles.headerTitle}>{title}</Text>;
};

// Reusable Logout Button Component
export const LogoutButton = ({ onPress }: any) => {
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={onPress}>
      <Ionicons name="log-out-outline" size={20} color="#ef4444" />
      <Text style={styles.logoutText}>Log out</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   profileHeader: {
     flexDirection: 'row',
     alignItems: 'center',
     marginBottom: 16,
   },
   profileImage: {
     width: 50,
     height: 50,
     borderRadius: 25,
     marginRight: 16,
   },
   profileInfo: {
     flex: 1,
   },
   profileName: {
     fontSize: 14,
     fontWeight: 'bold',
     marginBottom: 4,
     fontFamily: 'ClashGrotesk-Medium',
   },
   profilePhone: {
     fontSize: 14,
     color: '#9ca3af',
     fontFamily: 'ClashGrotesk-Regular',
   },
   tierContainer: {
    flexDirection: 'row',
    alignItems: 'center',
   },
   tierText: {
     fontSize: 14,
     fontWeight: 'bold',
     color: '#12B76A',
     marginRight: 8,
     fontFamily: 'ClashGrotesk-Regular',
   },
   menuItem: {
     flexDirection: 'row',
     alignItems: 'center',
     paddingVertical: 12,
   },
   menuIcon: {
     width: 40,
     height: 40,
     borderRadius: 20,
     justifyContent: 'center',
     alignItems: 'center',
     marginRight: 16,
   },
   iconImage: {
     width: 20,
     height: 20,
   },
   menuTitle: {
     fontSize: 14,
     fontWeight: 'bold',
     fontFamily: 'ClashGrotesk-Regular',
   },
   section: {
     marginBottom: 16,
   },
   headerTitle: {
     fontSize: 20,
     marginBottom: 8,
     fontFamily: 'ClashGrotesk-Medium',
   },
   logoutButton: {
     flexDirection: 'row',
     alignItems: 'center',
     marginTop: 48,
    justifyContent: 'center',
   },
   logoutText: {
     fontSize: 16,
     fontWeight: 'bold',
     color: '#ef4444',
     marginLeft: 8,
     fontFamily: 'ClashGrotesk-Regular',
   
   },
   chevronIcon: {
     marginLeft: 'auto',
   },

});

