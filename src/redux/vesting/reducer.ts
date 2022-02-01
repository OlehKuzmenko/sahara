import { ELoading, ELoadingType } from '@/interfaces/ELoading';
import { IVesting } from '@/interfaces/IVesting';
import { createSlice } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';
import { getVestingData } from './action';

interface VestingState {
  data: IVesting[];
  status: ELoadingType;
  error: null;
}

const initialState: VestingState = {
  data: [],
  status: ELoading.IDLE,
  error: null,
};

export const vestingSlice = createSlice({
  name: 'vesting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getVestingData.pending, (state) => {
        state.status = ELoading.LOADING;
      })
      .addCase(getVestingData.fulfilled, (state, action) => {
        // Add user to the state array
        state.status = ELoading.FINISHED;
        state.data = action.payload;
      })
      .addCase(getVestingData.rejected, (state) => {
        state.status = ELoading.ERROR;
      });

    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});
// export const {} = vestingSlice.actions;

export default vestingSlice.reducer;
