import styled, { css } from 'styled-components';
import { EColorScheme } from '@redux/css';
import ReactTooltip from 'react-tooltip';
import { ReactComponent as EyeVisible } from '@icons/eye.svg';
import { ReactComponent as EyeHidden } from '@icons/eye_close.svg';

export const StyledEyeVisible = styled(EyeVisible)`
  path {
    stroke: var(--theme-fill-color);
  }
`;
export const StyledEyeHidden = styled(EyeHidden)`
  path {
    stroke: var(--theme-fill-color);
  }
`;

export const StyledInputTitle = styled.p`
  font-family: Montserrat, serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  margin-right: 8px;
  margin-bottom: 8px;
`;

export const StyledUploadInput = styled.input`
  display: none;
`;

export const StyledInputTitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & label {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    cursor: pointer;

    & svg {
      margin-right: 5px;

      & path {
        stroke: var(--theme-StyledInputTitleContainer-svg-stroke);
      }
    }

    & p {
      font-family: Montserrat, serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: var(--theme-StyledInputTitleContainer-p-color);
    }
  }
`;

export const StyledInputTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 5px;
  z-index: 10;

  &[data-error='true'] {
    ${StyledEyeVisible}, ${StyledEyeHidden} {
      path {
        stroke: var(--color-pink-2);
      }
    }
  }
`;

export const StyledInputOverlayBadge = styled.div`
  width: 21px;
  height: 21px;
  position: absolute;
  right: 11px;
  bottom: 16px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledInputBlur = styled.div`
  position: absolute;
  left: 10px;
  bottom: 11px;
  width: 35px;
  height: 31px;
  background: linear-gradient(90deg,
    var(--theme-StyledInputBlur-bgr-1) -2.94%,
  var(--theme-StyledInputBlur-bgr-2) 68.6%,
  var(--theme-StyledInputBlur-bgr-3) 129.41%);
  transition: all 300ms ease-out;

  &.hidden {
    opacity: 0;
    transition: all 300ms ease-out;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 15px;
  background: var(--theme-StyledInput-bgr);
  border: none;
  outline: none;
  padding: 0 10px;
  caret-color: var(--theme-StyledInput-caret);
  color: var(--theme-StyledInput-color);
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 5px;

  &[type='password'] {
    font-family: 'pass', 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 18px;

    &::-webkit-input-placeholder {
      transform: scale(0.77);
      transform-origin: 0 50%;
    }

    &::-moz-placeholder {
      font-size: 14px;
      opacity: 1;
    }

    &:-ms-input-placeholder {
      font-size: 14px;
      font-family: 'Roboto', Helvetica, Arial, sans-serif;
    }
  }

  &[data-error='true'] {
    color: var(--color-pink-2);
  }

  &[data-badge='true'] {
    padding-right: 40px;
  }
`;

export const StyledInputPrompt = styled.p`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 9px;
  line-height: 11px;
  color: #ffffff;
  margin-top: 5px;
`;

export const StyledTooltip = styled(ReactTooltip)`
  max-width: 350px;
  position: absolute !important;
  background: var(--theme-StyledTooltip-bgr) !important;
  opacity: 1 !important;
  font-family: Montserrat, serif !important;
  font-weight: 600 !important;
  font-size: 10px !important;
  line-height: 12px !important;
  color: var(--theme-StyledTooltip-color) !important;
  border-radius: 10px !important;
  top: 0 !important;
  left: 150px !important;
  transition: all 300ms ease-out !important;

  &:after {
    display: none;
  }

  &:before {
    width: calc(100% + 14px) !important;
    height: calc(100% + 14px) !important;
    position: absolute;
    top: -5px !important;
    left: -11px !important;
    border-radius: 10px !important;
    border: 3px solid var(--theme-StyledTooltip-bgr) !important;
  }
`;

export const StyledInputTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledEyeVisible},${StyledEyeHidden} {
      --theme-fill-color: var(--theme-day-blue-2);
    }
    ${StyledInput} {
      --theme-StyledInput-bgr: var(--theme-main-color);
      --theme-StyledInput-caret: var(--theme-main-color-inverse);
      --theme-StyledInput-color: var(--theme-main-color-inverse);
    }

    ${StyledTooltip} {
      --theme-StyledTooltip-bgr: rgba(249, 198, 189, 1);
      --theme-StyledTooltip-color: rgba(35, 40, 84, 1);
    }

    ${StyledInputBlur} {
      --theme-StyledInputBlur-bgr-1: rgba(255, 255, 255, 1);
      --theme-StyledInputBlur-bgr-2: rgba(255, 255, 255, 0.9);
      --theme-StyledInputBlur-bgr-3: rgba(255, 255, 255, 0);
    }

    ${StyledInputTitleContainer} {
      --theme-StyledInputTitleContainer-p-color: var(--theme-main-color);
      --theme-StyledInputTitleContainer-svg-stroke: var(--theme-main-color);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledEyeVisible},${StyledEyeHidden} {
      --theme-fill-color: #ffffff;
    }
    ${StyledInput} {
      --theme-StyledInput-bgr: var(--theme-main-color);
      --theme-StyledInput-caret: var(--theme-main-color-inverse);
      --theme-StyledInput-color: var(--theme-main-color-inverse);
    }

    ${StyledTooltip} {
      --theme-StyledTooltip-bgr: #2c2f61;
      --theme-StyledTooltip-color: var(--theme-main-color-inverse);
    }

    ${StyledInputBlur} {
      --theme-StyledInputBlur-bgr-1: rgba(37, 40, 86, 1);
      --theme-StyledInputBlur-bgr-2: rgba(37, 40, 86, 0.9);
      --theme-StyledInputBlur-bgr-3: rgba(37, 40, 86, 0);
    }

    ${StyledInputTitleContainer} {
      --theme-StyledInputTitleContainer-p-color: var(--theme-main-color-inverse);
      --theme-StyledInputTitleContainer-svg-stroke: #AFB0C1;
    }
  }
`;
