import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const keys = ['1','2','3','4','5','6','7','8','9','.','0','←'];

interface KeypadProps {
  onPress: (key: string) => void;
}

const Keypad: React.FC<KeypadProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      {keys.map((key, index) => (
        <TouchableOpacity key={index} onPress={() => onPress(key)} style={styles.key}>
          <Text style={styles.keyText}>{key}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 40,
    justifyContent: 'space-between',
  },
  key: {
    width: '30%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  keyText: {
    fontSize: 24,
    color: '#fff',
  },
});

export default Keypad;
