import { StyleSheet, Text, View } from 'react-native'
import { React, useState } from 'react'
import { ScrollView } from 'react-native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const ForgetPassword = ({ navigation }) => {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');

    const onpressSubmit = () => {
        console.warn('Submit');
    };
    const onpressSignIn = () => {
        navigation.goBack('SignIn');
    };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#f9fbfc'}}>
    <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput 
            placeholder={"Code"}
            value={code}
            setValue={setCode}
        />
        <CustomButton 
            text={"Submit"}
            onPress={onpressSubmit}
        />
        <CustomButton 
            text={"Back to Sign In"}
            type={"TERTIARY"}
            onPress={onpressSignIn}
        />
    </View>
    </ScrollView>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f9fbfc',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4765A9',
        marginVertical: 16,
        marginTop: 50,
    },
})