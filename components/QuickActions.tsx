import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface QuickAction {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  color: string;
  onPress: () => void;
}

interface QuickActionsProps {
  actions?: QuickAction[];
}

const defaultActions: QuickAction[] = [
  {
    id: '1',
    icon: 'wallet',
    label: 'Fund Wallet',
    color: '#4FC3F7',
    onPress: () => console.log('Fund Wallet'),
  },
  {
    id: '2',
    icon: 'arrow-down',
    label: 'Withdraw',
    color: '#9C27B0',
    onPress: () => console.log('Withdraw'),
  },
  {
    id: '3',
    icon: 'receipt',
    label: 'Pay Bills',
    color: '#FF9800',
    onPress: () => console.log('Pay Bills'),
  },
  {
    id: '4',
    icon: 'card',
    label: 'Cards',
    color: '#673AB7',
    onPress: () => console.log('Cards'),
  },
  {
    id: '5',
    icon: 'qr-code',
    label: 'Squareme Pot',
    color: '#3F51B5',
    onPress: () => console.log('Squareme Pot'),
  },
];

const QuickActions: React.FC<QuickActionsProps> = ({ actions = defaultActions }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quick Actions</Text>
        <TouchableOpacity>
          <Text style={styles.seeMore}>See more</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.actionsContainer}
      >
        {actions.map((action) => (
          <TouchableOpacity key={action.id} style={styles.actionItem} onPress={action.onPress}>
            <View style={[styles.actionIcon, { backgroundColor: action.color }]}>
              <Ionicons name={action.icon} size={24} color="white" />
            </View>
            <Text style={styles.actionLabel}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  seeMore: {
    fontSize: 14,
    color: '#9C27B0',
    fontWeight: '500',
  },
  actionsContainer: {
    paddingHorizontal: 20,
    gap: 15,
  },
  actionItem: {
    alignItems: 'center',
    width: 80,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    fontWeight: '500',
  },
});

export default QuickActions;