import { EColorScheme } from '@/redux/css';
import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  border: 1px solid var(--theme-text-pink-color);
  border-radius: 30px;
  transition: all 300ms ease-out;
  background: transparent;
  padding: 11px 22px;
  display: inline-flex;
  align-items: center;

  &[data-short='true'] {
    span {
      display: inline-block;
      width: 70px;
      white-space: nowrap;
      overflow: hidden !important;
      text-overflow: ellipsis;
    }
  }

  &[data-capitalLetter='true'] {
    span {
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
  }

  span {
    transition: all 300ms ease-out;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: var(--theme-main-color-inverse);
  }
`;

export const StyledGradientButtonTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledButton} {
      &:not(:disabled):hover {
        cursor: pointer;
        background: var(--theme-main-color);
        transition: all 300ms ease-out;
      }
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledButton} {
      &:not(:disabled):hover {
        background: linear-gradient(90deg,
        var(--color-pink-1) 0%,
        var(--color-pink-2) 100%);
        cursor: pointer;
        transition: all 300ms ease-out;
      }
    }
  }
`;
