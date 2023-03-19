import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'

const CustomInput = ({placeholder, value, setValue, setSecurityType}) => {
  return (
    <View style = {styles.input}>
        <TextInput 
            placeholder={placeholder}
            style = {styles.inputText}
            value={value}
            onChangeText={setValue}
            secureTextEntry={setSecurityType}
        />
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        width: '100%',
        paddingVertical: 10,
        border: 2,
        borderColor: '#e0e0e0',
        shadowOpacity: 1,
        elevation: 1,
        borderRadius: 5,
        marginVertical: 8,
    },
    inputText: {
        fontSize: 16,
    },
})