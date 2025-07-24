import React from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { HeaderTitle, LogoutButton, MenuItem, ProfileHeader, Section } from './ProfileComponents';

export default function ProfileScreen({ 
  profileData,
  menuItems,
  onProfilePress,
  onMenuItemPress,
  onLogout
}: any) {
  // Default profile data
  const defaultProfileData = {
    profileImage: require('../assets/images/david_oloye.png'), 
    name: 'David Oloye',
    phoneNumber: '+23480888976',
    tier: 'TIER 2'
  };

  // Default menu items with their respective icons
  const defaultMenuItems = [
    {
      id: 'bank-account',
      title: 'Bank Account',
      icon: require('../assets/images/bank.png'),
      iconColor: '#9F56D4'
    },
    {
      id: 'account-management',
      title: 'Account Management',
      icon: require('../assets/images/money_account.png'), // Replace with your asset
      iconColor: '#9F56D4'
    },
    {
      id: 'account-statement',
      title: 'Account Statement',
      icon: require('../assets/images/document-text.png'), // Replace with your asset
      iconColor: '#9F56D4'
    },
    {
      id: 'rewards',
      title: 'Rewards',
      icon: require('../assets/images/discount-shape.png'), // Replace with your asset
      iconColor: '#9F56D4'
    },
    {
      id: 'badges',
      title: 'Badges',
      icon: require('../assets/images/medal-star.png'), // Replace with your asset
      iconColor: '#9F56D4'
    },
    {
      id: 'security',
      title: 'Security',
      icon: require('../assets/images/shield-tick.png'), // Replace with your asset
      iconColor: '#9F56D4'
    },
    {
      id: 'help-support',
      title: 'Help & Support',
      icon: require('../assets/images/message-question.png'), // Replace with your asset
      iconColor: '#9F56D4'
    }
  ];

  const profile = profileData || defaultProfileData;
  const items = menuItems || defaultMenuItems;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Header */}
        <Section style={styles.headerSection}>
          <HeaderTitle title="Profile" />
        </Section>

        {/* Profile Header */}
        <Section>
          <ProfileHeader
            profileImage={profile.profileImage}
            name={profile.name}
            phoneNumber={profile.phoneNumber}
            tier={profile.tier}
            onProfilePress={onProfilePress}
          />
        </Section>

        {/* Menu Items */}
        <Section style={styles.menuSection}>
          {items.map((item: any) => (
            <MenuItem
              key={item.id}
              icon={item.icon}
              iconColor={item.iconColor}
              title={item.title}
              onPress={() => onMenuItemPress?.(item)}
            />
          ))}
        </Section>

        {/* Logout Button */}
        <Section style={styles.logoutSection}>
          <LogoutButton onPress={onLogout} />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  headerSection: {
    marginBottom: 16,
  },
  menuSection: {
    marginBottom: 16,
  },
  logoutSection: {
    marginBottom: 16,
  },
});