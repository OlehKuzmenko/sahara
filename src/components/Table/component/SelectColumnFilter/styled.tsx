import { PREFIX } from '@/components/Dropdown/styled';
import { EColorScheme } from '@/redux/css';
import Select from 'react-select';
import styled, { css } from 'styled-components';
import { ReactComponent as FiltersIcon } from '@icons/filters_icon.svg';
import { ReactComponent as SelectIcon } from '@icons/select_icon.svg';

export const StyledSelectIcon = styled(SelectIcon)`
  margin-right: 5px;
`;

export const StyledFilterIcon = styled(FiltersIcon)`
  margin-right: 5px;
`;

export const StyledSelect = styled(Select)`
  --indicator-padding: 20px;

  &.${PREFIX}-filter {
    .${PREFIX}__control {
      transition: all 300ms ease-out;
      border-radius: 12px;
      background: #383a69;
      border: 1px solid transparent;

      &--menu-is-open,
      &--is-focused {
        background: #4f517a;
        box-shadow: 0 0 0 1px transparent;
        transition: all 300ms ease-out;

        .${PREFIX}__indicators {
          padding-right: 0;
          padding-left: var(--indicator-padding);
          transform: scale(-1);
        }
      }

      .${PREFIX}__value-container {
        display: flex;
        align-items: center;
        padding: 12px 16px;
      }

      .${PREFIX}__single-value,
      .${PREFIX}__input-container,
      .${PREFIX}__placeholder {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 11.31px;
        line-height: 14px;
        letter-spacing: 0.02em;
        text-transform: uppercase;

        color: #ffffff;
        transition: all 300ms ease-out;
        /* color: var(--theme-main-color-inverse); */
      }

      .${PREFIX}__indicators {
        transform-origin: center;
        transition: all 300ms ease-out;
        padding: 0;

        svg * {
          fill: white;
        }

        .${PREFIX}__indicator-separator {
          display: none;
        }
      }
    }

    .${PREFIX}__menu {
      border-radius: 15px;
      overflow: hidden;
      background: #383a69;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

      &-notice {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: normal;
        color: var(--theme-main-color-inverse);
        transition: all ease-out 300ms;
      }

      &-list {
        transition: all 300ms ease-out;
        color: var(--theme-main-color-inverse);
      }

      .${PREFIX}__option {
        font-family: Montserrat, serif;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 16px;
        color: #ffffff;

        &--is-selected {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        &--is-focused,
        &--is-selected {
          background: var(--theme-dropdown-bg-active);
        }
      }
    }
  }
`;
export const StyledColumnFilterTheme = css`
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
