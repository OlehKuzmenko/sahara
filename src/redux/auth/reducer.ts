import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  loginUserToWebSite,
  logoutUserFromWebSite,
  changeStateField,
} from './action';
import { PURGE } from 'redux-persist';
import {
  IUser,
  NetworkType,
  UserStatusType,
  WalletType,
} from '@interfaces/IUser';

type AuthStateData = IUser & { network: NetworkType };

export interface AuthState {
  data: AuthStateData;
  pending: boolean;
  error: boolean;
  changeStateField: {
    [x in keyof AuthStateData]?: AuthStateData[x] | boolean;
  };
}

const initialState: AuthState = {
  data: {
    accountName: '',
    status: UserStatusType.VISITOR,
    walletType: '',
    network: NetworkType.ETHEREUM,
  },
  pending: false,
  error: false,
  changeStateField: {
    accountName: false,
    status: false,
    walletType: false,
    network: false,
  },
};

export const counterSlice = createSlice({
  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setWalletType: (state, action: PayloadAction<WalletType>) => {
      state.data.walletType = action.payload;
    },
    setNetworkType: (state, action: PayloadAction<NetworkType>) => {
      state.data.network = action.payload;
    },
    clearAuthState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(changeStateField.pending, (state, { meta: { arg } }) => {
        Object.entries(arg).forEach(([key]) => {
          state.changeStateField[key as keyof AuthState['data']] = true;
        });
      })
      .addCase(changeStateField.fulfilled, (state, { payload }) => {
        Object.entries(payload).forEach(([key, value]) => {
          if (key === 'accountName') {
            state.data[key] = `${value}`;
          }
          state.changeStateField[key as keyof AuthState['changeStateField']] =
            false;
        });
      })
      .addCase(changeStateField.rejected, (state, { meta: { arg } }) => {
        Object.entries(arg).forEach(([key]) => {
          state.changeStateField[key as keyof AuthState['changeStateField']] =
            false;
        });
      });

    builder
      .addCase(loginUserToWebSite.pending, (state) => {
        state.pending = true;
      })
      .addCase(loginUserToWebSite.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = {
          ...payload,
          network: state.data.network,
        };
      })
      .addCase(loginUserToWebSite.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });

    builder
      .addCase(logoutUserFromWebSite.pending, (state) => {
        state.pending = true;
      })
      .addCase(logoutUserFromWebSite.fulfilled, (state) => {
        state.pending = false;
        state.data = initialState.data;
      })
      .addCase(logoutUserFromWebSite.rejected, () => {
        return initialState;
      });

    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});
export const { setWalletType, clearAuthState, setNetworkType } =
  counterSlice.actions;

export default counterSlice.reducer;
