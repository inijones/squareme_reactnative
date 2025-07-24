import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native';

interface Props {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
}

const DestinationOption: React.FC<Props> = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <View style={styles.iconBg}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.label}>{title}</Text>
      <Ionicons name="chevron-forward" size={20} style={{ marginLeft: 'auto' }} color="#9ca3af" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  iconBg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#CCF4FE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    marginRight: 12,
  },
  icon: {
    width: 16,
    height: 16,
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    color: '#111',
    fontFamily: 'ClashGrotesk-Regular',
  },
});

export default DestinationOption;
