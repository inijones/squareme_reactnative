import Typo from '@/components/Typo';
import { scale } from '@/utils/styling';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  FlatList, ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewToken
} from 'react-native';

const { width } = Dimensions.get('window');


const OnboardingScreen = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef<FlatList>(null);

  const router = useRouter();

  const viewableItemsChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setCurrentIndex(viewableItems[0]?.index ?? 0);
    }
  ).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  useEffect(() => {
  const interval = setInterval(() => {
    const nextIndex = (currentIndex + 1) % slides.length;
    slidesRef.current?.scrollToIndex({ index: nextIndex });
    }, 6000);

    return () => clearInterval(interval); // Cleanup
  }, [currentIndex]);

  const renderItem = ({ item }: { item: any }) => (
    <ImageBackground
      source={item.image}
      style={styles.slide}
      resizeMode="cover"
    >
      {/* Bottom Sheet Overlay */}
      <View style={styles.bottomSheet}>

        {/* Pagination Dots */}
        <View style={styles.dotsContainer}>
          {slides.map((_, i) => {
            const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
            const dotWidth = scrollX.interpolate({
              inputRange,
              outputRange: [10, 20, 10],
              extrapolate: 'clamp',
            });

            const backgroundColor = i === currentIndex ? '#000' : '#ccc';

            return (
              <Animated.View
                key={i.toString()}
                style={[styles.dot, { width: dotWidth, backgroundColor }]}
              />
            );
          })}
        </View>

        <Typo fontWeight={'700'} style={styles.title}>{item.title}</Typo>
        <Typo style={styles.subtitle}>{item.subtitle}</Typo>

        <TouchableOpacity onPress={() => router.push('/createAccount')} style={styles.buttonPrimary}>
          <Typo size={14} style={styles.buttonPrimaryText}>Create an account</Typo>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/login')} style={styles.buttonSecondary}>
          <Typo size={14}>I already have an account</Typo>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width,
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: 'white',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
    minHeight: scale(400),
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 8,
    elevation: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 14,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 8,
    marginBottom: 12,
  },
  buttonPrimaryText: {
    color: '#fff',
    textAlign: 'center',
  },
  buttonSecondary: {
  paddingVertical: 12,
  paddingHorizontal: 20,
  borderWidth: 0.5,
  borderColor: 'grey', // Make sure this contrasts with the background
  borderRadius: 8,
  backgroundColor: 'transparent',
  alignItems: 'center',
  justifyContent: 'center',
 },
 buttonSecondaryText: {
  color: '#fff',
  fontWeight: '600',
  textAlign: 'center',
  },
  dotsContainer: {
  position: 'absolute',
  top: 60,
  left: 0,
  right: 0,
  flexDirection: 'row',
  justifyContent: 'center',
  zIndex: 999, // boost it
  elevation: 20, // Android support
  },
  dot: {
    height: 4,
    borderRadius: 4,
    backgroundColor: '#333',
    marginHorizontal: 4,
  },
});


const slides = [
  {
    id: '1',
    title: 'Spend your money easily\nwithout any complications',
    subtitle: 'Receive funds sent to you in seconds.',
    image: require('../../assets/images/onboarding1.png'),
  },
  {
    id: '2',
    title: 'A super secure way to\npay your bills',
    subtitle: 'Pay your bills with the cheapest rates in town.',
    image: require('../../assets/images/onboarding2.png'),
  },
  {
    id: '3',
    title: 'A virtual USD card for\nyour payments',
    subtitle: 'Shop globally. Renew your subscriptions with ease.',
    image: require('../../assets/images/onboarding3.png'),
  },
];