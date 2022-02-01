import styled, { css } from 'styled-components';
import Slider from 'rc-slider';
import { EColorScheme } from '@redux/css';

export const StyledAmount = styled.p`
  font-family: Montserrat, serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: var(--theme-StyledAmount-color);
  margin-bottom: 17px;
  transition: all 300ms ease-out;
`;
export const StyledErrorContainer = styled.div`
  margin-top: 50px;
`;

export const StyledSlider = styled(Slider)`
  & .rc-slider-dot,
  & .rc-slider-dot-active {
    width: 3px;
    height: 21px;
    background: var(--theme-StyledSlider-dot);
    border-radius: 0;
    bottom: -10px;
    border-color: var(--theme-StyledSlider-dot);
    transition: all 300ms ease-out;
  }

  & .rc-slider-rail {
    height: 7px;
    background: var(--theme-StyledSlider-rail);
    transition: all 300ms ease-out;
  }

  & .rc-slider-track {
    height: 7px;
    background: linear-gradient(
      90deg,
      var(--theme-StyledSlider-track-1) 3%,
      var(--theme-StyledSlider-track-2) 99.99%,
      var(--theme-StyledSlider-track-3) 100%
    );
    transition: all 300ms ease-out;
  }

  & .rc-slider-handle {
    width: 23px;
    height: 23px;
    background: #ffffff;
    border: none;
    margin-top: -8px;
  }

  & .rc-slider-mark-text,
  & .rc-slider-mark-text-active {
    font-family: Montserrat, serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #ffffff;
    margin-top: 18px;
  }
`;

export const StyledSliderTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledAmount} {
      --theme-StyledAmount-color: var(--theme-main-color);
    }

    ${StyledSlider} {
      --theme-StyledSlider-dot: var(--theme-main-color);
      --theme-StyledSlider-rail: #e0708d;
      --theme-StyledSlider-track-1: #ffffff;
      --theme-StyledSlider-track-2: #ffffff;
      --theme-StyledSlider-track-3: #ffffff;
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledAmount} {
      --theme-StyledAmount-color: var(--theme-main-color-inverse);
    }

    ${StyledSlider} {
      --theme-StyledSlider-dot: var(--theme-main-color-inverse);
      --theme-StyledSlider-rail: #5e4469;
      --theme-StyledSlider-track-1: #a01f83;
      --theme-StyledSlider-track-2: #e3526c;
      --theme-StyledSlider-track-3: #e4536c;
    }
  }
`;
