import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TechBadge({ name, color, icon, label }) {
  return (
    <View style={[styles.badge, { borderColor: color + '55' }]}>
      {icon ? (
        <Ionicons name={icon} size={20} color={color} />
      ) : (
        <Text style={[styles.labelText, { color }]}>{label || name}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    width: 42,
    height: 42,
    borderRadius: 8,
    backgroundColor: '#161b22',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  labelText: {
    fontSize: 9,
    fontWeight: '700',
  },
});
