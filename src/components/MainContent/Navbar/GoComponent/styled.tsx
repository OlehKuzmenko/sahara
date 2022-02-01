import { PREFIX } from '@/components/Dropdown/styled';
import Dropdown from '@components/Dropdown';
import { ReactComponent as ETH } from '@icons/eth.svg';
import styled from 'styled-components';

export const StyledContainer = styled.section`
  /* width: 100%; */
  /* max-width: 140px; */
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  svg {
    width: 21px;
    height: 21px;
  }
`;

export const StyledEthIcon = styled(ETH)`
  * {
    fill: var(--theme-main-color-inverse);
    transition: all 300ms ease-out;
  }
`;

export const StyledSelect = styled(Dropdown)`
  width: 100%;
  cursor: pointer;

  &.${PREFIX}-container {
    cursor: pointer;

    .${PREFIX}__control {
      cursor: pointer;

      background: transparent;
      transition: all 300ms ease-out;
      border: 1px solid var(--theme-dropdown-pink);
      border-radius: 30px;
      &--menu-is-open,
      &--is-focused {
        box-shadow: 0 0 0 1px var(--theme-dropdown-pink);
        transition: all 300ms ease-out;
      }

      .${PREFIX}__value-container {
        padding: 12px 0 12px calc(20px + 15px);
        cursor: pointer;
      }
      .${PREFIX}__single-value, .${PREFIX}__input-container {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;
        text-transform: none;
        color: var(--theme-main-color-inverse);
      }
      .${PREFIX}__indicators {
        padding-right: 0;
        svg {
          * {
            fill: var(--theme-main-color-inverse);
          }
        }
        .${PREFIX}__indicator-separator {
          display: none;
        }
      }
    }
    .${PREFIX}__menu {
      &-notice {
        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: normal;
        color: var(--theme-main-color-inverse);
      }
      &-list {
        padding: 0;
        background: var(--theme-main-color);
        transition: all 300ms ease-out;
        color: var(--theme-main-color-inverse);
      }
      .${PREFIX}__option {
        cursor: pointer;

        font-family: 'Montserrat', sans-serif;
        font-style: normal;
        font-weight: normal;
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
