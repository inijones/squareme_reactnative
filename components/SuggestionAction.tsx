import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  ColorValue,
} from 'react-native';

interface SuggestedAction {
  id: string;
  title: string;
  backgroundColor: ColorValue;
  image: any;
  onPress: () => void;
}

interface SuggestedActionsProps {
  actions?: SuggestedAction[];
}

// Replace these with your actual image assets
const defaultActions: SuggestedAction[] = [
  {
    id: '1',
    title: 'Earn up to 14% interest on your locked funds',
    backgroundColor: '#F9F9F9',
    image: require('../assets/images/piggy-bank.png'),
    onPress: () => console.log('Savings'),
  },
  {
    id: '2',
    title: 'Speed up your payments',
    backgroundColor: '#D7E5FF',
    image: require('../assets/images/speed-payment.png'),
    onPress: () => console.log('Speed payments'),
  },
];

const SuggestedActions: React.FC<SuggestedActionsProps> = ({
  actions = defaultActions,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggested actions</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {actions.map((action) => (
          <TouchableOpacity
            key={action.id}
            style={[styles.card, { backgroundColor: action.backgroundColor }]}
            onPress={action.onPress}
          >
            <Text style={styles.cardTitle}>{action.title}</Text>
            <Image source={action.image} style={styles.cardImage} resizeMode="contain" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SuggestedActions;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
    fontFamily: 'ClashGrotesk-Medium',
  },
  scrollContainer: {
    gap: 12,
  },
  card: {
    width: 220,
    height: 180,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-between',
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    fontFamily: 'ClashGrotesk-Medium',
  },
  cardImage: {
    width: '100%',
    height: 120,
    alignSelf: 'center',
    marginTop: 12,
  },
});
