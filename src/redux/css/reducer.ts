import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CssState {
  colorScheme: EColorScheme;
  sidebarOpen: boolean;
}

export enum EColorScheme {
  DAY = 'light',
  NIGHT = 'dark',
}

const initialState: CssState = {
  colorScheme: EColorScheme.DAY,
  sidebarOpen: false,
};

export const CssSlice = createSlice({
  name: 'css',
  initialState,
  reducers: {
    changeColorScheme: (state, action: PayloadAction<EColorScheme>) => {
      state.colorScheme = action.payload;
    },
    changeSidebarState: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
  },
});

export const { changeColorScheme, changeSidebarState } = CssSlice.actions;

export default CssSlice.reducer;
