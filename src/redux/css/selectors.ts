import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/redux';

export const selectCss = (state: RootState): typeof state.css => state.css;

export const selectCurrentColorMode = createSelector(
  selectCss,
  (state) => state.colorScheme
);
export const selectSidebarState = createSelector(
  selectCss,
  (state) => state.sidebarOpen
);
