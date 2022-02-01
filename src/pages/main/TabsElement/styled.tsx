import styled, { css } from 'styled-components';
import CustomSlider from '@components/Slider';
import GradientButton from '@components/GradientButton';
import { EColorScheme } from '@redux/css';
import CustomSelect from '@components/Dropdown';

export const StyledInfo = styled.p`
  justify-self: flex-end;
  text-align: left;
  grid-area: text;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 9.29348px;
  line-height: 11px;
  color: #ffffff;
`;

export const StyledDropdownContainer = styled.section`
  width: 100%;
`;

export const StyledLabel = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--theme-StyledLabel-color);
  margin-bottom: 17px;
  transition: all 300ms ease-out;
`;

export const StyledCustomSliderDeposit = styled(CustomSlider)`
  grid-area: slider;
`;

export const StyledGradientButtonTabs = styled(GradientButton)`
  grid-area: btn;
  border-color: var(--theme-StyledGradientButtonTabs-border);
  transition: all 300ms ease-out;
  padding: 11px 56px;
  justify-content: center;

  &:hover {
    /* background: transparent !important; */
  }

  & span {
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
  }
`;

export const StyledErrorMessage = styled.p`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: var(--theme-StyledErrorMessage-color);
  text-shadow: 0 0 5px black;
  margin-bottom: 15px;
  width: 100%;
  text-align: right;
`;

export const StyledSelect = styled(CustomSelect)`
  width: 100%;
  margin-bottom: 30px;
`;

export const StyledTabsElementTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledLabel} {
      --theme-StyledLabel-color: var(--theme-main-color);
    }

    ${StyledGradientButtonTabs} {
      &:not(:disabled):hover {
        background: var(--theme-main-color-inverse);
      }

      --theme-StyledGradientButtonTabs-border: var(--theme-main-color);
    }

    ${StyledErrorMessage} {
      --theme-StyledErrorMessage-color: #FF0000FF;
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledLabel} {
      --theme-StyledLabel-color: var(--theme-main-color-inverse);
    }

    ${StyledGradientButtonTabs} {
      --theme-StyledGradientButtonTabs-border: var(--color-pink-2);

      &:not(:disabled):hover {
        background: linear-gradient(90deg,
        var(--color-pink-1) 0%,
        var(--color-pink-2) 100%);
      }
    }

    ${StyledErrorMessage} {
      --theme-StyledErrorMessage-color: var(--color-pink-2);
    }
  }
`;
