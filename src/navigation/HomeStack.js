import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Account, Home} from '../screens';

const Stack = createStackNavigator();

export default ExploreStack = () => (
  <>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: null,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  </>
);
