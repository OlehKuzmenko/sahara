import { EColorScheme } from '@/redux/css';
import styled, { css } from 'styled-components';
import breakpoints from '@styles/constants.styled';
// import { LoaderWithoutOverlay } from '@/components/Loader';

// export const StyledLoaderWithoutOverlay = styled(LoaderWithoutOverlay)`
//   width: 100px;
//   height: 100px;
// `;

export const StyledContainer = styled.section``;

export const StyledInfo = styled.p`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 300;
  font-size: 10.8392px;
  line-height: 13px;
  color: var(--theme-main-color-inverse);
  transition: all 300ms ease-out;
  text-align: end;
  padding-bottom: 23px;
`;

export const StyledDataContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 17px 32px;
  padding-bottom: 75px;
  align-items: flex-start;

  @media screen and ${breakpoints.Device.tablet} {
    flex-direction: column;
  }
  .badges {
    flex: 1;
  }
  .tabs {
    flex: 3;
  }
`;

export const StyledBadgeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 32px;
  position: sticky;
  top: 30px;
  @media screen and ${breakpoints.Device.desktop_sm} {
    position: relative;
  }
`;

export const StyledTokenDataContainer = styled.div`
  display: inline-grid;
  grid-template-columns: auto auto;
  gap: 32px;
  margin-bottom: 26px;
  [data-type='format'] {
    @media screen and ${breakpoints.Device.tablet} {
      text-align: end;
    }
  }
  @media screen and ${breakpoints.Device.tablet} {
    display: grid;
    grid-template-columns: auto;
  }
`;

export const StyledTotalContainer = styled.div`
  margin-bottom: 45px;
`;

export const StyledTotalPrice = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17.3006px;
  line-height: 21px;
  color: var(--theme-main-color-inverse);
  transition: all 300ms ease-out;
`;

export const StyledTokenName = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 49px;
  color: var(--theme-text-pink-color);
  transition: all 300ms ease-out;
  @media screen and ${breakpoints.Device.tablet} {
    font-size: 30px;
  }
`;

export const StyledValue = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 0.02em;
  color: var(--theme-main-color-inverse);
  transition: all 300ms ease-out;
  @media screen and ${breakpoints.Device.tablet} {
    font-size: 30px;
  }
`;

export const StyledMainTheme = css`
  /* &[data-theme='${EColorScheme.DAY}'] {
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
  } */
`;
