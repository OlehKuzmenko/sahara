import {
  changeSidebarState,
  EColorScheme,
  selectSidebarState,
} from '@/redux/css';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { ReactComponent as SaharaLogo } from '@icons/sahara_logo.svg';
import breakpoints, { zIndexes } from '@styles/constants.styled';
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const StyledSaharaLogo = styled(SaharaLogo)`
  * {
    transition: all 300ms ease-out;
    fill: var(--theme-sidebar-logo);
  }
`;

export const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  transition: 300ms all ease-out;
  height: 100vh;
  width: var(--sidebar-initial-width);
  background: var(--theme-sidebar-main);
  z-index: ${zIndexes.sideBar};

  @media screen and ${breakpoints.Device.tablet} {
    width: 100%;
    transform: translateX(calc(-100% - 20px));
  }
`;

const StyledLabel = styled.label`
  display: none;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;

  width: 26px;
  height: 26px;

  cursor: pointer;
  z-index: ${zIndexes.sideBarOpen};

  @media screen and ${breakpoints.Device.tablet} {
    display: flex;
  }

  & > span,
  & > span::before,
  & > span::after {
    display: none;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--theme-main-color-inverse);
    transition-duration: 0.25s;
    @media screen and ${breakpoints.Device.tablet} {
      display: block;
    }
  }
  & > span::before {
    content: '';
    top: -8px;
  }
  & > span::after {
    content: '';
    top: 8px;
  }
`;

const StyledInput = styled.input`
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  @media screen and ${breakpoints.Device.tablet} {
    display: none;
  }
  &:checked ~ ${StyledLabel} > span {
    transform: rotate(45deg);
  }
  &:checked ~ ${StyledLabel} > span::before {
    top: 0;
    transform: rotate(0);
  }
  &:checked ~ ${StyledLabel} > span::after {
    top: 0;
    transform: rotate(90deg);
  }

  //CSS for active sidebar state
  &:checked ~ ${StyledSidebar} {
    visibility: visible;
    transform: translateX(0);
    /* left: 0; */
  }
`;

export const BurgerBtn = function (): JSX.Element {
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(selectSidebarState);

  const clickCheckbox = function () {
    dispatch(changeSidebarState());
  };

  useEffect(() => {
    document.body.classList.toggle('modal-open', isSidebarOpen);
    return () => document.body.classList.remove('modal-open');
  }, [isSidebarOpen]);

  return (
    <>
      <StyledInput
        checked={isSidebarOpen}
        onChange={clickCheckbox}
        id="menu__toggle"
        type="checkbox"
      />
      <StyledLabel htmlFor="menu__toggle">
        <span/>
      </StyledLabel>
    </>
  );
};

export const StyledLink = styled(NavLink)`
  position: relative;
  display: flex;
  padding: 16px 35px;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: var(--theme-sidebar-link-color);
  text-decoration: none;
  transition: all 300ms ease-out;
  &:not(.selected):hover {
    background: #64678b;
    opacity: 0.5;
  }
  &.selected {
    user-select: none;
    background: #64678b;
    color: var(--theme-sidebar-link-color);
  }
`;

export const StyledLogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 46px 0;
`;

export const StyledFollow = styled.section`
  position: absolute;
  bottom: 25px;
  width: 100%;
  padding: 17px 0 29px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #232854;
  h4 {
    text-align: center;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: #ffffff;
  }
`;

export const StyledFollowContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(15px, 20px));
  gap: 15px;
  justify-content: center;
`;

export const StyledFollowElement = styled.li``;
export const StyledFollowLink = styled(Link)``;

export const StyledLinksList = styled.ul`
  list-style: none;
  padding: 0;
  max-height: calc(100% - 295px);
  overflow: auto;
`;

export const StyledVersion = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 11.1538px;
  line-height: 14px;
  width: 100%;
  padding: 6px 0;
  text-align: center;
  position: absolute;
  bottom: 0;
  transition: all 300ms ease-out;
  color: var(--theme-sidebar-link-color);
  background: var(--theme-sidebar-main);
`;

export const StyledSidebarTheme = css`
  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledSidebar} {
      --theme-sidebar-main: #383a69;
      --theme-sidebar-second: #64678b;
      --theme-sidebar-link-color: #ffffff;
      --theme-sidebar-logo: #ffffff;
    }
  }
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledSidebar} {
      --theme-sidebar-main: #f2f2f1;
      --theme-sidebar-second: #c7c8d5;
      --theme-sidebar-link-color: #232854;
      --theme-sidebar-logo: #232854;
    }
  }
`;
