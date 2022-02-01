import {
  Action,
  configureStore,
  ThunkAction,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import { modalSlice } from './modal';
import { cssSlice } from './css';
import { vestingSlice } from './vesting';
import { transactionHistory } from './transaction';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  auth: authReducer,
  modal: modalSlice,
  css: cssSlice,
  vesting: vestingSlice,
  transactionHistory,
  // This is where we add reducers.
  // Since we don't have any yet, leave this empty
});

const persistedReducer = persistReducer(
  persistConfig,
  reducers
) as unknown as typeof reducers;

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(),
});
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
