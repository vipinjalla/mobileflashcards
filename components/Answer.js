import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { purple } from '../utils/colors';

export default function Answer({ children, answerText = '', style = {} }) {
  return children ? (
    <View>{children}</View>
  ) : (
    <Text style={[styles.anwer, style]}>{answerText}</Text>
  );
}

const styles = StyleSheet.create({
  answer: {
    textAlign: 'center',
    color: purple,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
