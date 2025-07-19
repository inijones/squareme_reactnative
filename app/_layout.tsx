import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { View, StyleSheet } from 'react-native';

SplashScreen.preventAutoHideAsync(); // Ensure splash screen stays visible until fonts load

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'ClashGrotesk-Regular': require('../assets/fonts/ClashGrotesk-Regular.otf'),
    'ClashGrotesk-Bold': require('../assets/fonts/ClashGrotesk-Bold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); // Hide splash screen after fonts load
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Don't render anything until fonts are ready
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

const styles = StyleSheet.create({});
