import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Account} from '../screens';

const Stack = createStackNavigator();

export default AccountStack = () => (
  <>
    <Stack.Navigator
      initialRouteName="Account"
      screenOptions={{
        headerShown: null,
      }}>
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  </>
);
