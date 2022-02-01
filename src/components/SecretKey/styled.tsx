import styled, { css } from 'styled-components';
import { EColorScheme } from '@redux/css';
import img from '@icons/checkbox.svg';
import Input from '@components/Input';

export const StyledInput = styled(Input)``;

export const StyledSecretKeyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 379px;
`;

export const StyledSecretKeyTitle = styled.h2`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: var(--theme-StyledSecretKeyTitle-color);
  margin-bottom: 9px;
`;

export const StyledSecretKeyText = styled.p`
  text-align: center;
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: var(--theme-StyledSecretKeyText-color);
  margin-bottom: 27px;
`;

export const StyledSecretKeyBtnContainer = styled.div`
  width: fit-content;
  display: flex;
  margin-bottom: 29px;

  & button:first-child {
    margin-right: 32px;
  }
`;

export const StyledSecretKeyBtn = styled.button`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: var(--theme-StyledSecretKeyBtn-color);
  text-decoration: underline;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  &:disabled {
    opacity: 0.7;
  }
`;

export const StyledSecretKeyPrompt = styled.p`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: var(--theme-StyledSecretKeyPrompt-color);
  padding: 12px 15px;
  border-radius: 15px;
  border: 1px solid var(--theme-StyledSecretKeyPrompt-border);
  text-align: center;
  margin-bottom: 21px;
`;

export const StyledSecretKeyCheckboxContainer = styled.label`
  display: flex;
  align-self: flex-start;
  align-items: center;
  margin-bottom: 28px;

  & input {
    display: none;
  }

  & input:checked + div:before {
    opacity: 1;
  }
`;

export const StyledSecretKeyCheckbox = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background-color: var(--theme-StyledSecretKeyCheckbox-bgr);
  margin-right: 12px;
  position: relative;

  &:before {
    content: url('${img}');
    width: 100%;
    top: 1px;
    left: 2px;
    height: 100%;
    position: absolute;
    opacity: 0;
    transition: all 300ms ease-out;
  }
`;

export const StyledSecretKeyCheckboxLabel = styled.p`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  user-select: none;
  color: var(--theme-StyledSecretKeyCheckboxLabel-color);
`;

export const StyledSecretKeyTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledInput} {
      --theme-StyledInput-bg: #e6e6e6;
      --theme-StyledInput-color: #232854;
      [data-component='input'] {
        background: var(--theme-StyledInput-bg);
        color: var(--theme-StyledInput-color);
      }
      [data-component='blur'] {
        background: linear-gradient(
          90deg,
          #e6e6e6 -2.94%,
          rgba(230, 230, 230, 0.5) 68.6%,
          rgba(230, 230, 230, 0) 129.41%
        );
      }
    }
    ${StyledSecretKeyTitle} {
      --theme-StyledSecretKeyTitle-color: var(--color-pink-1);
    }

    ${StyledSecretKeyText} {
      --theme-StyledSecretKeyText-color: var(--theme-day-blue-2);
    }

    ${StyledSecretKeyBtn} {
      --theme-StyledSecretKeyBtn-color: var(--theme-day-blue-2);
    }

    ${StyledSecretKeyPrompt} {
      --theme-StyledSecretKeyPrompt-color: var(--theme-day-blue-2);
    }

    ${StyledSecretKeyCheckbox} {
      --theme-StyledSecretKeyCheckbox-bgr: #e6e6e6;
    }

    ${StyledSecretKeyCheckboxLabel} {
      --theme-StyledSecretKeyCheckboxLabel-color: var(--theme-day-blue-2);
    }

    ${StyledSecretKeyPrompt} {
      --theme-StyledSecretKeyPrompt-border: var(--color-pink-1);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledSecretKeyTitle} {
      --theme-StyledSecretKeyTitle-color: var(--color-pink-2);
    }

    ${StyledSecretKeyText} {
      --theme-StyledSecretKeyText-color: var(--theme-main-color-inverse);
    }

    ${StyledSecretKeyBtn} {
      --theme-StyledSecretKeyBtn-color: var(--theme-main-color-inverse);
    }

    ${StyledSecretKeyPrompt} {
      --theme-StyledSecretKeyPrompt-color: var(--theme-main-color-inverse);
    }

    ${StyledSecretKeyCheckbox} {
      --theme-StyledSecretKeyCheckbox-bgr: var(--theme-noght-grey-1);
    }

    ${StyledSecretKeyCheckboxLabel} {
      --theme-StyledSecretKeyCheckboxLabel-color: var(
        --theme-main-color-inverse
      );
    }

    ${StyledSecretKeyPrompt} {
      --theme-StyledSecretKeyPrompt-border: var(--color-pink-2);
    }
  }
`;
