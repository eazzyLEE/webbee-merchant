import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['categories', 'user'],
};

// function getMiddlewares() {
//   if (__DEV__) {
//     return applyMiddleware(ReduxThunk, logger);
//   }

//   return applyMiddleware(ReduxThunk);
// }

const middleware = [ReduxThunk, logger];

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, {}, applyMiddleware(...middleware));

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>

export { persistor, store };
