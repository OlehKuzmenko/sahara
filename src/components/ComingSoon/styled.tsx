import { EColorScheme } from '@/redux/css';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.footer`
  margin-top: calc(-1 * var(--main-content-overlapping) + 55px);
  height: calc(100% - (-1 * var(--main-content-overlapping) + 55px));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const StyledImg = styled.img`
  /* width: 100%; */
  width: auto;
  @media screen and (max-width: 970px) {
    width: 100%;
  }
`;

export const StyledText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;
  text-align: center;
  color: var(--theme-main-color-inverse);
  transition: all 300ms ease-out;
`;

export const StyledComingSoonTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
  }
`;
