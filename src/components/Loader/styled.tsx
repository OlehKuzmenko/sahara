import { EColorScheme } from '@/redux/css';
import { zIndexes } from '@styles/constants.styled';
import Lottie from 'lottie-react';
import styled, { css } from 'styled-components';

export const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${zIndexes.loaderOverlay};
`;
export const StyledOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
`;
export const Loader = styled(Lottie)``;

export const StyledLoader = styled(Lottie)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
`;
export const StyledLoaderTheme = css`
  &[data-theme='${EColorScheme.NIGHT}'] {
  }
  &[data-theme='${EColorScheme.DAY}'] {
  }
`;
