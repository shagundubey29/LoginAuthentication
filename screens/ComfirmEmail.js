import { StyleSheet, Text, View } from 'react-native'
import { React, useState } from 'react'
import { ScrollView } from 'react-native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const ComfirmEmail = ({ navigation }) => {
    const [confirmCode, setConfirmCode] = useState('');

    const onpressConfirm = () => {
        console.warn('Comfirm');
    };
    const onpressResendCode = () => {
        console.warn('ResendCode');
    };
    const onpressSignIn = () => {
        navigation.navigate('SignIn');
    };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#f9fbfc'}}>
    <View style={styles.root}>
        <Text style={styles.title}>Confirm Sign Up</Text>
        <CustomInput 
            placeholder={"Enter your confirmaion code"}
            value={confirmCode}
            setValue={setConfirmCode}
        />
        <CustomButton 
            text={"Comfirm"}
            onPress={onpressConfirm}
        />
        <CustomButton 
            text={"Resend code"}
            type={"SECONDARY"}
            onPress={onpressResendCode}
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

export default ComfirmEmail

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