import { StyleSheet, Text, View } from 'react-native'
import { React, useState } from 'react'
import { ScrollView } from 'react-native'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const SignUp = ({ navigation }) => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [ComfirmPassword, setComfirmPassword] = useState('');

    const onpressRegister = () => {
        navigation.navigate('ComfirmEmail');
    };
    const onSignInGoogle = () => {
        console.warn('Sign In with Google');
    };
    const onSignInFacebook = () => {
        console.warn('Sign In with Facebook');
    };
    const onSignInApple = () => {
        console.warn('Sign In with Apple');
    };
    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#f9fbfc'}}>
    <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput 
            placeholder={"Username"}
            value={userName}
            setValue={setUserName}
        />
        <CustomInput 
            placeholder={"Email"}
            value={Email}
            setValue={setEmail}
        />
        <CustomInput
            placeholder={"Password"}
            value={password}
            setValue={setPassword}
            setSecurityType={true}
        />
        <CustomInput
            placeholder={"Comfirm Password"}
            value={ComfirmPassword}
            setValue={setComfirmPassword}
            setSecurityType={true}
        />
        <CustomButton 
            text={"Register"}
            onPress={onpressRegister}
        />
        <Text style={{fontSize: 16, color: 'gray', marginVertical: 10}}>
          By registering, you comfirm that you accept our <Text style={{color: '#fdb075'}}>Terms of use </Text> and <Text style={{color: '#fdb075'}}>Privacy Policy</Text>.
        </Text>
        <CustomButton 
            text={"Sign in with Google"}
            onPress={onSignInGoogle}
            bgColor={"#FAE9EA"}
            fgColor={"#DD4D44"}
        />
        <CustomButton 
            text={"Sign in with Facebook"}
            onPress={onSignInFacebook}
            bgColor={"#E7EAF4"}
            fgColor={"#4765A9"}
        />
        <CustomButton 
            text={"Sign in with Apple"}
            onPress={onSignInApple}
            bgColor={"#E3E3E3"}
            fgColor={"#363636"}
        />
        <CustomButton 
            text={"Don't have an account? Create one"}
            onPress={onSignUpPress}
            type={"TERTIARY"}
        />
    </View>
    </ScrollView>
  )
}

export default SignUp

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