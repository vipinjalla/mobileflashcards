import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { purple } from '../utils/colors';

export default function Score({
  children,
  obtainedPoints = 0,
  outOfPOints = 0,
  style = {},
}) {
  const percentage =
    obtainedPoints && outOfPOints
      ? Math.round(parseFloat((obtainedPoints * 100) / outOfPOints) * 100) / 100
      : 0;
  return (
    <View>
      <Text style={[styles.title, style]}>Score</Text>
      <Text style={[styles.score, style]}>{`${percentage} %`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: purple,
    fontSize: 24,
    fontWeight: 'bold',
  },
  score: {
    textAlign: 'center',
    color: purple,
    fontSize: 24,
  },
});
