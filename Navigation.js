import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import ForgotPasswordScreen from './ForgotPasswordScreen';
import SignUpScreen from './SignUpScreen';
import TaskScreen from './TaskScreen';


const Stack = createStackNavigator();

export function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen}/>
      <Stack.Screen name="Task" component={TaskScreen}/>
    </Stack.Navigator>
  );
}
