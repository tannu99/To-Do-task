import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Login, SignUp} from '../screens';
import BottomNav from '../components/BottomNav';
import {NavigationRef} from './RouterServices';
import {loginDataSelectors} from '../Redux/Login/loginSlice';
import {useSelector} from 'react-redux';
const Stack = createStackNavigator();
function LoggedScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
}

function LoginScreen() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

const ApplicationNavigator = () => {
  const {is_logged} = useSelector(loginDataSelectors.getData);
  return (
    <NavigationContainer ref={NavigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {is_logged ? (
          <Stack.Screen name="LoggedScreen" component={LoggedScreen} />
        ) : (
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
