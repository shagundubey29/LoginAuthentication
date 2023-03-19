import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import ComfirmEmail from './screens/ComfirmEmail';
import ForgetPassword from './screens/ForgetPassword';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="ComfirmEmail" component={ComfirmEmail}/>
        <Stack.Screen name="ResetPassword" component={ForgetPassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

