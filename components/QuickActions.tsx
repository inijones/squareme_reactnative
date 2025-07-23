import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, FlatList } from 'react-native';

interface ActionItem {
  id: string;
  label: string;
  image: any; // imported image reference
  onPress: () => void;
}

interface QuickActionsProps {
  actions?: ActionItem[];
}

const defaultActions = [
  {
    id: '1',
    label: 'Fund Wallet',
    image: require('../assets/images/fund_wallet.png'),
    onPress: () => {},
  },
  {
    id: '2',
    label: 'Withdraw',
    image: require('../assets/images/withdraw.png'),
    onPress: () => {},
  },
  {
    id: '3',
    label: 'Pay Bills',
    image: require('../assets/images/pay_bill.png'),
    onPress: () => {},
  },
  {
    id: '4',
    label: 'Cards',
    image: require('../assets/images/card.png'),
    onPress: () => {},
  },
  {
    id: '5',
    label: 'Squareme Pot',
    image: require('../assets/images/squareme_pot.png'),
    onPress: () => {},
  },
  {
    id: '6',
    label: 'Airtime',
    image: require('../assets/images/airtime.png'),
    onPress: () => {},
  },
  {
    id: '7',
    label: 'Data',
    image: require('../assets/images/wifi.png'),
    onPress: () => {},
  },
  {
    id: '8',
    label: 'Cable TV',
    image: require('../assets/images/cable.png'),
    onPress: () => {},
  },
  {
    id: '9',
    label: 'Utility',
    image: require('../assets/images/utility.png'),
    onPress: () => {},
  },
];


const QuickActions: React.FC<QuickActionsProps> = ({ actions = defaultActions }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => setExpanded(prev => !prev);

  const renderItem = ({ item }: { item: ActionItem }) => (
    <TouchableOpacity key={item.id} style={styles.actionItem} onPress={item.onPress}>
      <View style={styles.iconWrapper}>
        <Image source={item.image} style={styles.iconImage} resizeMode="contain" />
        <Text style={styles.actionLabel}>{item.label}</Text>
      </View>
     
    </TouchableOpacity>
  );

  const itemsToRender = expanded ? actions : actions.slice(0, 5);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Quick Actions</Text>
        <TouchableOpacity onPress={toggleExpanded}>
          <Text style={styles.seeMore}>{expanded ? 'See less' : 'See more'}</Text>
        </TouchableOpacity>
      </View>

      {expanded ? (
      <View style={styles.gridContainer}>
        {actions.map((item, index) => (
          <View
            key={item.id}
            style={[
              styles.actionItem,
              { marginRight: (index + 1) % 4 === 0 ? 0 : 8 } // no margin on last column
            ]}
          >
            {renderItem({ item })}
          </View>
        ))}
      </View>
      ) : (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {actions.slice(0, 5).map(item => renderItem({ item }))}
      </ScrollView>
)}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'ClashGrotesk-Medium',
  },
  seeMore: {
    fontSize: 12,
    color: '#9F56D4',
    fontFamily: 'ClashGrotesk-Regular',
  },
  scrollContainer: {
    gap: 2,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 4,
  },
  actionItem: {
    alignItems: 'center',
    marginRight: 8, // control horizontal gap
    marginBottom: 0,
    width: 70, // tighter width
    padding: 0,
  },
  iconWrapper: {
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4, // less vertical space
  },
  iconImage: {
    width: 22,
    height: 22,
    marginBottom: 6,
  },
  actionLabel: {
    fontSize: 10,
    textAlign: 'center',
    fontFamily: 'ClashGrotesk-Light',
  },
});

export default QuickActions;