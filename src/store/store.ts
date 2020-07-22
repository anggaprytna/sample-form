import {createStore, applyMiddleware, combineReducers} from 'redux';
import {persistStore, persistReducer, PURGE} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import logger from 'redux-logger';

import locale from './_reducers/locales';

const reducers = combineReducers({
  locale,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['locale'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(logger));

const persistor = persistStore(store);
export {store, persistor};

export default store;
