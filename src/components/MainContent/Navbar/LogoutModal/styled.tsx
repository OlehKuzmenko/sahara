import styled, { css } from 'styled-components';
import GradientButton from '@components/GradientButton';
import { EColorScheme } from '@redux/css';

export const StyledLogoutContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 25px;
  grid-template-areas:
    'title title'
    'text text'
    '. .';
`;

export const StyledLogoutTitle = styled.h1`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #e4536c;
  grid-area: title;
  text-align: center;
`;

export const StyledLogoutText = styled.p`
  font-family: Montserrat, serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: var(--theme-StyledLogoutText-color);
  grid-area: text;
  text-align: center;
`;

export const StyledLogoutButton = styled(GradientButton)`
  align-items: center;
  justify-content: center;
  & span {
    color: var(--theme-StyledLogoutButton-color);
    font-size: 14px;
    line-height: 17px;
  }

  &:hover {
    background: linear-gradient(90deg, #a01f83 0%, #e4536c 100%);
    transition: all 300ms ease-out;

    span {
      color: #232854;
    }
  }
`;

export const StyledLogoutModalTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledLogoutText} {
      --theme-StyledLogoutText-color: var(--theme-main-color-inverse);
    }

    ${StyledLogoutButton} {
      --theme-StyledLogoutButton-color: var(--color-pink-1);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledLogoutText} {
      --theme-StyledLogoutText-color: var(--theme-main-color-inverse);
    }

    ${StyledLogoutButton} {
      --theme-StyledLogoutButton-color: var(--theme-main-color-inverse);
    }
  }
`;
