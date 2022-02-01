import breakpoints, { zIndexes } from '@styles/constants.styled';
import styled, { css } from 'styled-components';
import { StyledConnectWalletTheme } from './ConnectWallet/styled';
import { StyledLogoutModalTheme } from './LogoutModal/styled';
import { ReactComponent as IconWalletConnected } from '@icons/icon_wallet_connected.svg';
import ReactTooltip from 'react-tooltip';
import { EColorScheme } from '@redux/css';

export const StyledIconWalletConnected = styled(IconWalletConnected)`
  * {
    fill: var(--theme-main-color-inverse);
  }
`;

export const StyledIMGContainer = styled.div`
  width: 22px;
  margin-right: 6px;
  img {
    width: 100%;
  }
`;

export const StyledTitleContainer = styled.section`
  margin-top: 93px;
`;
export const StyledSNavbarContainer = styled.section`
  display: flex;
  gap: 28px;
  flex-wrap: wrap;
`;

export const StyledNavbar = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 60px;

  position: relative;
  max-width: var(--main-max-width);
  background-size: cover;
  margin: 0 auto;

  @media screen and ${breakpoints.Device.tablet} {
    padding: 60px 10px 0;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const StyledOverlayHolder = styled.nav<{ background?: string }>`
  background: ${(props) =>
          props.background ? `url(${props.background})` : 'transparent'};
  background-size: 100% 100%;
  background: no-repeat;
  position: relative;
  z-index: ${zIndexes.header};
  @media screen and ${breakpoints.Device.tablet} {
    padding-left: 0;
  }
`;

export const StyledToggleContainer = styled.section`
  display: inline-grid;
  grid-template-columns: auto auto;
  gap: 10px;
  justify-content: center;
  align-items: center;
  span {
    transition: all 300ms ease-out;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
  }
`;

export const StyledTooltipWrapper = styled.div`
  position: relative;
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
  top: 60px !important;
  left: -100px !important;
  transition: all 300ms ease-out !important;

  &:after {
    display: none;
  }

  &:before {
    width: calc(100% + 14px) !important;
    height: calc(100% + 14px) !important;
    position: absolute;
    top: -10px !important;
    left: 0 !important;
    border-radius: 10px !important;
    border: 3px solid var(--theme-StyledTooltip-bgr) !important;
  }
`;

export const StyledNavbarTheme = css`
  ${StyledLogoutModalTheme},
  ${StyledConnectWalletTheme},
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledTooltip} {
      --theme-StyledTooltip-bgr: rgba(249, 198, 189, 1);
      --theme-StyledTooltip-color: rgba(35, 40, 84, 1);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledTooltip} {
      --theme-StyledTooltip-bgr: #2c2f61;
      --theme-StyledTooltip-color: var(--theme-main-color-inverse);
    }
  }
`;
