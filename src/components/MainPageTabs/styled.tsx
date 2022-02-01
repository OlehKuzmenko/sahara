import styled, { css } from 'styled-components';
import { ReactComponent as Arrow } from '@icons/arrow.svg';
import breakpoints from '@styles/constants.styled';
import { EColorScheme } from '@/redux/css';

export const StyledArrow = styled(Arrow)``;

export const StyledMainPageTabs = styled.section`
  height: 100%;
`;

export const StyledTabElement = styled.li`
  &:not(.active) {
    cursor: pointer;
  }
`;

export const StyledTabWrapper = styled.div`
  width: 100%;
  height: 100%;

  &.deposit {
    display: grid;
    grid-gap: 30px;
    padding-right: 22px;
    grid-template-columns: repeat(4, 1fr);
    align-items: baseline;
    justify-items: center;
    grid-template-areas:
      '. slider slider slider'
      '. . text text'
      '. btn btn .';
  }

  &.withdraw {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
  }
`;

export const StyledTabsContainer = styled.ul`
  display: flex;
  justify-content: space-between;

  ${StyledTabElement}:not(:last-child) {
    margin-right: 7px;
  }

  ${StyledTabElement} {
    &:not(:last-of-type) {
      span {
        border-radius: 15px 15px 0 0;
      }
    }

    span {
      user-select: none;
      display: grid;
      gap: 43px;
      align-items: center;
      grid-template-columns: max-content max-content;
      position: relative;
      top: 4px;
      padding: 22px 40px 16px;
      background: var(--default-bg-color-not-active);
      transition: all 300ms ease-out;
      font-family: 'Montserrat', sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      color: #ffffff;
      text-transform: uppercase;
      border-radius: 15px 15px 0 0;
      @media screen and ${breakpoints.Device.tablet} {
        padding: 15px;
        border-radius: 0;
        top: 0;
      }

      ${StyledArrow} {
        display: none;
      }
    }

    span:hover {
      top: 0;
    }

    &.active {
      span {
        &[data-index='0'] {
          background: var(--default-bg-color-btn1);
          transition: all 300ms ease-out;
        }

        &[data-index='1'] {
          background: var(--default-bg-color-btn2);
          transition: all 300ms ease-out;
        }

        ${StyledArrow} {
          display: flex;
        }
      }
    }
  }

  @media screen and ${breakpoints.Device.tablet} {
    flex-direction: column;

    ${StyledTabElement} {
      width: 100%;
    }

    ${StyledTabElement}:not(:last-child) {
      margin-right: 0;
    }

    ${StyledTabElement} a {
      border-radius: 0;
      opacity: 1;
      top: 0;
    }
  }
`;

export const StyledTabContentElement = styled.div`
  display: none;

  &.active {
    display: block;
    width: 100%;
    height: 100%;
  }

  p + div {
    margin-top: 15px;
  }
`;

export const StyledTabsContent = styled.div`
  height: calc(100% - 58px);
  display: flex;
  align-items: center;
  position: relative;
  z-index: 2;
  padding: 35px;
  background: var(--default-bg-color);
  transition: all 300ms ease-out;
  border-radius: 0 0 15px 15px;
  @media screen and ${breakpoints.Device.tablet} {
    padding: 15px;
    border-radius: 0;
  }
`;

export const StyledTabsTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledMainPageTabs} {
      --default-bg-color: linear-gradient(
        90.05deg,
        #a01f83 0.01%,
        #ee745f 99.93%
      );
      --default-bg-color-btn1: linear-gradient(
        90.04deg,
        #a01f83 0.03%,
        #ee745f 342.26%
      );
      --default-bg-color-btn2: linear-gradient(
        89.98deg,
        #a01f83 -183.1%,
        #ee745f 100%
      );
      --default-bg-color-not-active: #facfc1;
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledMainPageTabs} {
      --default-bg-color: #383a69;
      --default-bg-color-btn1: var(--default-bg-color);
      --default-bg-color-btn2: var(--default-bg-color);
      --default-bg-color-not-active: #2c2f61;
    }
  }
`;
