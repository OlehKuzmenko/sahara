import { EColorScheme } from '@/redux/css/reducer';
import styled, { css } from 'styled-components';

export const StyledSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--theme-switch-unchecked-color);
  border: 2px solid var(--theme-switch-boll-color);
  border-radius: 18px;
  transition: all 300ms ease-out;
  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 3px;
    bottom: 50%;
    transform: translateY(50%);
    background-color: var(--theme-switch-boll-color);
    -webkit-transition: 0.4s;
    transition: all 300ms ease-out;
    border-radius: 50%;
  }
`;

export const StyledTitle = styled.span`
  cursor: pointer;
  color: var(--theme-StyledTitle-color);
  transition: all 300ms ease-out;
`;

export const StyledInput = styled.input`
  transition: all 300ms ease-out;
  &:checked + ${StyledSpan} {
    background-color: var(--theme-switch-checked-color);
  }
  &:focus + ${StyledSpan} {
    box-shadow: 0 0 1px var(--theme-switch-checked-color);
  }
  &:checked + ${StyledSpan}:before {
    transform: translateY(50%) translateX(calc(100% - 2px));
  }
`;

export const StyledLabelSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  ${StyledInput} {
    opacity: 0;
    width: 0;
    height: 0;
  }
`;

export const StyledSwitchTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledLabelSwitch} {
      --theme-switch-unchecked-color: transparent;
      --theme-switch-checked-color: transparent;
      --theme-switch-boll-color: var(--theme-day-blue-2);
    }

    ${StyledTitle} {
      --theme-StyledTitle-color: var(--theme-day-blue-2);
    }
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledLabelSwitch} {
      --theme-switch-unchecked-color: transparent;
      --theme-switch-checked-color: transparent;
      --theme-switch-boll-color: var(--theme-main-color-inverse);
    }

    ${StyledTitle} {
      --theme-StyledTitle-color: var(--theme-main-color-inverse);
    }
  }
`;
