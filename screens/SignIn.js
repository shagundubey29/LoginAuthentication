import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { React, useState } from 'react'
import { ScrollView } from 'react-native'
import { Image } from 'react-native'
import Logo from '../assets/images/logo.png'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'

const SignIn = ({ navigation }) => {
    const height =  Dimensions.get('window').height;
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const onpressSignIn = () => {
        console.warn('Sign In');
    };
    const onpressForgetPassword = () => {
        navigation.navigate('ResetPassword');
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
    <ScrollView>
    <View style={styles.root}>
        <Image source={Logo} resizeMode={"contain"} style={[styles.logo, {height: height * 0.3}]}/>
        <CustomInput 
            placeholder={"Username"}
            value={userName}
            setValue={setUserName}
        />
        <CustomInput
            placeholder={"Password"}
            value={password}
            setValue={setPassword}
            setSecurityType={true}
        />
        <CustomButton 
            text={"Sign In"}
            onPress={onpressSignIn}
        />
        <CustomButton 
            text={"Forget Your Password?"}
            onPress={onpressForgetPassword}
            type={"TERTIARY"}
        />
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

export default SignIn

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#f9fbfc',
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 300,
    },
})