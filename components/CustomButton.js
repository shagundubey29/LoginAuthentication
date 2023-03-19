import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Pressable } from 'react-native'

const CustomButton = ({ onPress, text, type='PRIMARY', fgColor, bgColor }) => {
  return (
    <Pressable onPress={onPress} style={[styles.button,
      styles[`button_${type}`],
      bgColor ? {backgroundColor: bgColor} : {},
      ]} >
      <Text style={[
        styles.buttonText,
        styles[`text_${type}`],
        fgColor ? {color: fgColor} : {},
      ]}>{text}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginVertical: 8,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button_PRIMARY:{
    backgroundColor: '#3b71fb',
  },
  button_TERTIARY:{
    backgroundColor: '#f9fbfc',
  },
  text_PRIMARY:{
    color: '#fff',
  },
  text_TERTIARY:{
    color: 'gray',
  },
})