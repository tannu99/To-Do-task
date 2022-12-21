import 'react-native-gesture-handler';
import React from 'react';
// import { MainPage, Sample } from './src/screens';
import ApplicationNavigator from './src/navigation/Application';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/Redux';
import {NavigationContainer} from '@react-navigation/native';
import {NavigationRef} from './src/navigation/RouterServices';
import {NativeBaseProvider} from 'native-base';

const App = () => (
  <NativeBaseProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ApplicationNavigator />
      </PersistGate>
    </Provider>
  </NativeBaseProvider>
);

export default App;
