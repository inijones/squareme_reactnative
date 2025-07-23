// components/WhyBvnInfo.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const WhyBvnInfo = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <View style={styles.card}>
      <TouchableOpacity
        style={styles.header}
        onPress={() => setExpanded(!expanded)}
      >
        <MaterialCommunityIcons name="shield-check-outline" size={18} color="#9F56D4" />
        <Text style={styles.headerText}>Why we need your BVN?</Text>
        <Feather
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={18}
          color="#9F56D4"
          style={{ marginLeft: 'auto' }}
        />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.content}>
          <Text style={styles.bullet}>{`\u2022`} We request for your BVN to verify your identity and confirm that the account you provided is yours.</Text>
          <Text style={styles.bullet}>{`\u2022`} Only access to your full name, phone number and date of birth is granted.</Text>
          <Text style={styles.bullet}>{`\u2022`} Your BVN does not grant access to bank accounts or transaction details.</Text>
          <Text style={styles.bullet}>{`\u2022`} Rest assured, your data is securely managed by us.</Text>
        </View>
      )}
    </View>
  );
};

export default WhyBvnInfo;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F3E9FC',
    borderRadius: 12,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#9F56D4',
    fontWeight: '600',
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'ClashGrotesk-Medium',
  },
  content: {
    marginTop: 12,
  },
  bullet: {
    fontSize: 13,
    color: '#13004A',
    marginBottom: 8,
    lineHeight: 20,
    fontFamily: 'ClashGrotesk-Regular',
  },
});
