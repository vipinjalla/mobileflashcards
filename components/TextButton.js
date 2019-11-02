import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple, red } from '../utils/colors'

export default function TextButton ({ children, onPress, style = {} }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, styles.button, style]}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center',
    color: purple,
  },
  button: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: red
  }
});
