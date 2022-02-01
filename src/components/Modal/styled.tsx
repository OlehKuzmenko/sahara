import styled, { css } from 'styled-components';
import { zIndexes } from '@styles/constants.styled';
import { ReactComponent as Cross } from '@icons/cross.svg';
import { EColorScheme } from '@/redux/css';

export const StyledCross = styled(Cross)`
  cursor: pointer;
  position: absolute;
  right: 14px;
  top: 10px;
  * {
    fill: var(--theme-main-color-inverse);
  }
`;

export const StyledReactModal = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: ${zIndexes.modalWindow};
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: var(--theme-modal-background);
  opacity: 0.7;
`;
export const StyledModalWrapper = styled.div`
  background: var(--theme-wrapper-color);
  border-radius: 10px;
  padding: 28px 20px;
`;

export const StyledModalContainer = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 6px;
  border: 3px solid var(--theme-main-color);
  background: transparent;
`;

export const StyledModalTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledModalWrapper} {
      --theme-wrapper-color: var(--theme-main-color);
    }
    ${StyledOverlay} {
      --theme-modal-background: rgba(84, 84, 84, 1);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledModalWrapper} {
      --theme-wrapper-color: #2c2f61;
    }
    ${StyledOverlay} {
      --theme-modal-background: black;
    }
  }
`;
