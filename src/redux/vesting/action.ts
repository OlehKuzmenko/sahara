import { createVestingTableData } from '@/components/Table/mocked';
import { IVesting } from '@/interfaces/IVesting';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '..';

type VestingReturned = IVesting;

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const getVestingData = createAsyncThunk(
  'vesting/getVestingData',
  async () => {
    await timeout(3000);
    return createVestingTableData(20) as VestingReturned[];
  },
  {
    condition: (_, { getState, ...props }) => {
      const { vesting } = getState() as RootState;
      const fetchStatus = vesting.status;
      console.log(fetchStatus === 'loading', props);
      if (fetchStatus === 'finished' || fetchStatus === 'loading') {
        // Already fetched or in progress, don't need to re-fetch
        return false;
      }
    },
  }
);
