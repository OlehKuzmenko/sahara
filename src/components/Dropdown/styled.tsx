import styled, { css } from 'styled-components';
import Select from 'react-select';
import { EColorScheme } from '@/redux/css';

export const PREFIX = 'react-select';

export const StyledSelectTitle = styled.h3`
  font-family: Montserrat, serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  width: 100%;
  text-align: left;
  margin-bottom: 8px;
`;

export const StyledSelect = styled(Select)`
  &.${PREFIX}-container {
    .${PREFIX}__control {
      transition: all 300ms ease-out;
      background: var(--theme-main-color);
      border-radius: 15px;
      border: 1px solid transparent;

      &--menu-is-open,
      &--is-focused {
        border: 1px solid var(--theme-dropdown-pink);
        box-shadow: 0 0 0 1px var(--theme-dropdown-pink);
        transition: all 300ms ease-out;
      }

      .${PREFIX}__value-container {
        padding: 9px 10px;
      }

      .${PREFIX}__input-container {
        width: 100%;
        overflow: hidden;
      }

      .${PREFIX}__single-value, .${PREFIX}__input-container {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 22px;
        text-transform: uppercase;
        transition: all 300ms ease-out;
        color: var(--theme-main-color-inverse);
      }

      .${PREFIX}__indicators {
        padding-right: 20px;

        .${PREFIX}__indicator-separator {
          display: none;
        }
      }
    }

    .${PREFIX}__menu {
      border-radius: 15px;
      overflow: hidden;
      background: var(--theme-dropdown-bgr);

      &-notice {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: normal;
        color: var(--theme-main-color-inverse);
        transition: all ease-out 300ms;
      }

      &-list {
        background: var(--theme-dropdown-bgr);
        transition: all 300ms ease-out;
        color: var(--theme-main-color-inverse);
      }

      .${PREFIX}__option {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: normal;
        padding-top: 10px;
        padding-bottom: 10px;

        &--is-selected {
          background: var(--theme-dropdown-pink);
        }

        &--is-focused {
          background: var(--theme-dropdown-bg-active);
        }
      }
    }
  }
`;

export const StyledSelectTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledSelect} {
      --theme-dropdown-bg-active: #64678b;
      --theme-dropdown-pink: var(--color-pink-1);
      --theme-dropdown-bgr: var(--theme-main-color);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledSelect} {
      --theme-dropdown-bg-active: #64678b;
      --theme-dropdown-pink: var(--color-pink-2);
      --theme-dropdown-bgr: var(--theme-main-color);
    }
  }
`;
