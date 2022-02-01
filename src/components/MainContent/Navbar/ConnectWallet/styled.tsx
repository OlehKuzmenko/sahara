import styled, { css } from 'styled-components';
import { EColorScheme } from '@redux/css';
import GradientButton from '@components/GradientButton';

export const StyledConnectWalletContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 25px;
  grid-template-areas:
    'title title'
    'text text'
    '. .';
`;

export const StyledConnectWalletTitle = styled.h1`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #e4536c;
  grid-area: title;
  text-align: center;
`;

export const StyledConnectWalletText = styled.p`
  font-family: Montserrat, serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: var(--theme-StyledConnectWalletText-color);
  grid-area: text;
  text-align: center;
`;

export const StyledGradientButton = styled(GradientButton)`
  svg path {
    fill: var(--theme-StyledGradientButton);
  }
  &:hover {
    svg path {
      fill: #ffffff;
    }
  }
`;

export const StyledConnectWalletTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledConnectWalletText} {
      --theme-StyledConnectWalletText-color: var(--theme-main-color-inverse);
    }

    ${StyledGradientButton} {
      --theme-StyledGradientButton: #222559;
      &:hover {
        cursor: pointer;
        background: linear-gradient(
          90.05deg,
          #a01f83 0.01%,
          #ee745f 99.93%
        ) !important;
        transition: all 300ms ease-out;
      }
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledConnectWalletText} {
      --theme-StyledConnectWalletText-color: var(--theme-main-color-inverse);
    }

    ${StyledGradientButton} {
      --theme-StyledGradientButton: #ffffff;
    }
  }
`;
