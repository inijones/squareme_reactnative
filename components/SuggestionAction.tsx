import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ColorValue } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface SuggestedAction {
  id: string;
  title: string;
  subtitle: string;
  gradient: [ColorValue, ColorValue];
  image: string;
  onPress: () => void;
}

interface SuggestedActionsProps {
  actions?: SuggestedAction[];
}

const defaultActions: SuggestedAction[] = [
  {
    id: '1',
    title: 'Earn up to 14% interest',
    subtitle: 'on your locked funds',
    gradient: ['#FFF8E1', '#FFECB3'],
    image: '🐷',
    onPress: () => console.log('Savings'),
  },
  {
    id: '2',
    title: 'Speed up your',
    subtitle: 'payments',
    gradient: ['#E8EAF6', '#C5CAE9'],
    image: '⚡',
    onPress: () => console.log('Speed payments'),
  },
];

const SuggestedActions: React.FC<SuggestedActionsProps> = ({ 
  actions = defaultActions 
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suggested actions</Text>
      
      <View style={styles.actionsContainer}>
        {actions.map((action, index) => (
          <TouchableOpacity key={action.id} style={styles.actionCard} onPress={action.onPress}>
            <LinearGradient
              colors={action.gradient}
              style={styles.cardGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{action.title}</Text>
                <Text style={styles.cardSubtitle}>{action.subtitle}</Text>
              </View>
              
              <View style={styles.cardImage}>
                {action.id === '1' ? (
                  <View style={styles.piggyBank}>
                    <View style={styles.coin} />
                    <View style={styles.pig} />
                  </View>
                ) : (
                  <View style={styles.speedIcon}>
                    <Text style={styles.emoji}>⚡</Text>
                    <View style={styles.circle1} />
                    <View style={styles.circle2} />
                  </View>
                )}
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  actionsContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  actionCard: {
    flex: 1,
    height: 140,
    borderRadius: 16,
    overflow: 'hidden',
  },
  cardGradient: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  cardImage: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  piggyBank: {
    position: 'relative',
    width: 50,
    height: 40,
  },
  coin: {
    position: 'absolute',
    top: -5,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFD700',
    zIndex: 2,
  },
  pig: {
    width: 40,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FF69B4',
    position: 'absolute',
    bottom: 0,
  },
  speedIcon: {
    position: 'relative',
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 24,
    zIndex: 3,
  },
  circle1: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFB74D',
    opacity: 0.3,
    top: 5,
    left: 10,
  },
  circle2: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FF8A65',
    opacity: 0.4,
    bottom: 5,
    right: 5,
  },
});

export default SuggestedActions;