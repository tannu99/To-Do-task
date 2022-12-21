import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {loginReducer} from './Login/loginSlice';

const persistConfig = {
  key: '@studyApp',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  loginData: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store);
