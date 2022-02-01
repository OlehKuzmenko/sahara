import styled, { css } from 'styled-components';
import { StyledNavbarTheme } from './Navbar/styled';
import { StyledSidebarTheme } from './Sidebar/styled';
import breakpoints, { zIndexes } from '@styles/constants.styled';
import { StyledFooterTheme } from './Footer/styled';

export const StyledContainer = styled.main<{ comingSoon: boolean }>`
  --padding-multiply: 15px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: ${({ comingSoon }) =>
    comingSoon
      ? `minmax(auto, 365px) auto`
      : `minmax(auto, 365px) auto max-content`};
  grid-column-gap: 0;
  grid-row-gap: 0;
  min-height: 100vh;

  padding-left: var(--sidebar-initial-width);
  background: var(--theme-main-color);
  transition: all 300ms ease-out;

  @media screen and ${breakpoints.Device.tablet} {
    padding-left: 0;
  }
`;

export const StyledWrapper = styled.section`
  max-width: var(--main-max-width);
  width: 100%;
  margin: var(--main-content-overlapping) auto 0;
  position: relative;
  z-index: ${zIndexes.main};
  @media screen and ${breakpoints.Device.tablet} {
    padding: 0 10px;
  }
`;

// export const StyledMainPage = styled.section`
//   padding-left: var(--sidebar-initial-width);
// `;

export const StyledMainComponentTheme = css`
  ${StyledSidebarTheme}
  ${StyledNavbarTheme}
  ${StyledFooterTheme}
`;
