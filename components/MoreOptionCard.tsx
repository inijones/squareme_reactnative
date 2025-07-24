import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface MoreOptionCardProps {
  title: string;
  description: string;
  icon: ImageSourcePropType;
  iconBackgroundColor: string;
  onPress: () => void;
}

const MoreOptionCard: React.FC<MoreOptionCardProps> = ({
  title,
  description,
  icon,
  iconBackgroundColor,
  onPress
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
        <Image source={icon} style={styles.iconImage} resizeMode="contain" />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MoreOptionCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconImage: {
    width: 20,
    height: 20,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111',
    marginBottom: 2,
    fontFamily: 'ClashGrotesk-Medium',
  },
  description: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'ClashGrotesk-Regular',
  },
});
