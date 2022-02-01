import { EColorScheme } from '@/redux/css';
import { ReactComponent as SaharaLogo } from '@icons/sahara_icon_small.svg';
import { zIndexes } from '@styles/constants.styled';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledIMG = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  object-fit: cover;
`;

export const StyledFooter = styled.footer`
  --rotation-transform: 90deg;
  position: relative;
  margin-top: -120px;
  z-index: ${zIndexes.footer};
`;

export const StyledWrapper = styled.section`
  position: relative;
  padding-bottom: 140px;
  padding-top: 152px;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 23px;
`;

export const StyledLinkContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 38px;
  justify-content: center;
`;

export const StyledLogo = styled(SaharaLogo)`
  * {
    transition: all 300ms ease-out;
    fill: var(--theme-main-color-inverse);
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10.2353px;
  line-height: 12px;
  text-transform: uppercase;
  color: #857c9b;
  
  &:hover {
    cursor: pointer;
  }
`;

export const StyledFooterTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
  }
  &[data-theme='${EColorScheme.NIGHT}'] {
  }
`;
