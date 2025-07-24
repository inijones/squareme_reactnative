import React from 'react'
import ProfileScreen from '@/components/ProfileScreen';

const profile = () => {
  const handleProfilePress = () => {
    console.log('Profile pressed - navigate to edit profile');
  };

  const handleMenuItemPress = (item: any) => {
    console.log(`Menu item pressed: ${item.title}`);
    // Navigate to respective screen based on item.id
  };

  const handleLogout = () => {
    console.log('Logout pressed - show confirmation dialog');
  };

  return (
    <ProfileScreen
      onProfilePress={handleProfilePress}
      onMenuItemPress={handleMenuItemPress}
      onLogout={handleLogout}
    />
  )
}

export default profile
