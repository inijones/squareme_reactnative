import * as LocalAuthentication from 'expo-local-authentication';

const authenticateBiometrics = async () => {
  const compatible = await LocalAuthentication.hasHardwareAsync();
  const enrolled = await LocalAuthentication.isEnrolledAsync();

  if (compatible && enrolled) {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Authenticate',
      fallbackLabel: 'Enter PIN',
    });

    if (result.success) {
      // Proceed to app
      console.log('Authenticated!');
    } else {
      console.log('Biometric failed');
    }
  }
};

export default authenticateBiometrics;