import AppButton from '@/components/AppButton';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function SuccessScreen() {
  const router = useRouter();
  const { title, message, nextRoute, buttonText = 'Continue' } = useLocalSearchParams();

  const safeNextRoute = typeof nextRoute === 'string' ? nextRoute : '/';

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/success_create_image.png')}
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>

      <AppButton
        title={buttonText}
        onPress={() => router.replace({ pathname: safeNextRoute as never })}
        style={styles.button}
        textStyle={styles.buttonText}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingBottom: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 60,
  },
  icon: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#13004A',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: 'ClashGrotesk-Medium',
  },
  message: {
    fontSize: 14,
    fontWeight: '400',
    color: '#13004A',
    textAlign: 'center',
    fontFamily: 'ClashGrotesk-Light',
  },
  button: {
    width: '100%',
    backgroundColor: '#000080',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'ClashGrotesk-Medium',
  },
});

