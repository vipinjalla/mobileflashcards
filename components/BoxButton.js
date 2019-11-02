import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { purple, red, green, white, black, lightPurp } from '../utils/colors'

export const buttonType = {
  INFO: 'info',
  SUCCESS: 'success',
  ERROR: 'error',
  ACTION: 'action'
};

export default function BoxButton ({ label, type=buttonType.INFO, onPress, disabled, buttonStyle={}, textStyle={}}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} disabled={disabled} 
        style={[styles[`${type}Button`] || styles.infoButton, 
        styles.button, buttonStyle]}>
        <Text style={[styles.text, textStyle]}>{label}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    minWidth: 180,
    margin: 10,
    textAlign: 'center',
    borderRadius: 5,
    padding: 5
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: white  
  },
  errorButton: {
    backgroundColor: red
  },
  actionButton: {
    backgroundColor: lightPurp
  },
  successButton: {
    backgroundColor: green
  },
  infoButton: {
    backgroundColor: purple
  }
});
