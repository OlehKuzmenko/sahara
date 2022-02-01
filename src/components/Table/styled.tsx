import { EColorScheme } from '@redux/css';
import breakpoints from '@styles/constants.styled';
import styled, { css } from 'styled-components';
import { StyledColumnFilterTheme } from './component/SelectColumnFilter/styled';

export const StyledHeadContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  h3 {
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--theme-main-color-inverse);
    transition: all 300ms ease-out;
  }
`;

export const StyledFilterContainer = styled.section`
  display: inline-flex;
  justify-content: flex-end;
  padding-bottom: 8px;

  & > div {
    width: 200px;
  }

  .filter-element-container + .filter-element-container {
    margin-left: 6px;
  }
`;

export const StyledTable = styled.table`
  --theme-base-padding: 5px;
  --theme-head-padding: 35px;
  width: 100%;
  border-spacing: 0;
  border-radius: 10px;
  overflow: hidden;
  margin: 0 auto;

  & td,
  & th {
    padding-left: var(--theme-base-padding);
    padding-right: var(--theme-base-padding);
  }
`;

export const StyledSortingIcon = styled.span`
  margin: 0 4px;

  & svg path {
    fill: var(--theme-StyledSortingIcon-fill);
  }
`;

export const StyledTableHead = styled.thead`
  background: linear-gradient(90.05deg,
  var(--theme-StyledTableHead-bgr-1) 0.01%,
  var(--theme-StyledTableHead-bgr-2) 99.93%);
  transition: all 300ms ease-out;
  @media screen and ${breakpoints.Device.tablet} {
    display: none;
  }
`;

export const StyledTableTr = styled.tr`
  @media screen and ${breakpoints.Device.tablet} {
    display: block;
    border-bottom: 3px solid var(--theme-main-color-inverse);
  }

  & td:first-child,
  & th:first-child {
    padding-left: var(--theme-head-padding);
    @media screen and ${breakpoints.Device.tablet} {
      padding-left: var(--theme-base-padding);
    }
  }

  & td:last-child,
  & th:last-child {
    padding-right: var(--theme-head-padding);
    @media screen and ${breakpoints.Device.tablet} {
      padding-right: var(--theme-base-padding);
    }
  }
`;

export const StyledTableTh = styled.th`
  font-family: Montserrat, serif;
  font-weight: 700;
  font-size: 11px;
  line-height: 14px;
  color: #ffffff;
  padding: 24px 0 21px;
  text-align: left;
`;

export const StyledTableTd = styled.td`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: #ffffff;
  padding: 24px 0 21px;

  @media screen and ${breakpoints.Device.tablet} {
    border-bottom: 1px solid var(--theme-main-color-inverse);
    display: block;
    font-size: 0.8em;
    text-align: right;
    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export const StyledTableBody = styled.tbody`
  & tr:nth-child(odd) {
    transition: all 300ms ease-out;
    background: linear-gradient(89.98deg,
    var(--theme-StyledTableTr-bgr-1) 0.01%,
    var(--theme-StyledTableTr-bgr-2) 99.98%);
  }

  & tr:nth-child(even) {
    transition: all 300ms ease-out;
    background: linear-gradient(90.05deg,
    var(--theme-StyledTableTr-bgr-3) 0.01%,
    var(--theme-StyledTableTr-bgr-4) 99.93%);
  }
`;

export const StyledPaggination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--theme-StyledPaggination-bgr);
  border-radius: 0 0 10px 10px;
  max-width: 243px;
  margin: 0 auto;
  padding: 20px 0;
  transition: all 300ms ease-out;

  & button svg path {
    fill: var(--theme-StyledPaggination-svg);
    transition: all 300ms ease-out;
  }
`;

export const StyledPagginationCurrentPage = styled.p`
  font-family: Montserrat, serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: var(--theme-StyledPaggination-color);
  margin-right: 8px;
  transition: all 300ms ease-out;
`;

export const StyledPagginationPagesNumber = styled.p`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: var(--theme-StyledPaggination-color);
  margin-left: 8px;
  transition: all 300ms ease-out;
`;

export const StyledPagginationNumbers = styled.div`
  display: flex;
  align-items: center;
  color: var(--theme-StyledPaggination-color);
  transition: all 300ms ease-out;
`;

export const StyledPagginationButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  &.right svg {
    transform: rotate(180deg);
  }
`;

export const StyledTableTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledTableHead} {
      --theme-StyledTableHead-bgr-1: var(--color-pink-1);
      --theme-StyledTableHead-bgr-2: var(--color-orange-1);
    }

    ${StyledTableTd} {
      --theme-StyledColor-action: #2c2f61;
      --theme-StyledColor-status-success: #232854;
      --theme-StyledColor-action-fail: #a6038b;
    }

    ${StyledTableTr} {
      --theme-StyledTableTr-bgr-1: #b45fa1;
      --theme-StyledTableTr-bgr-2: #f39c85;
      --theme-StyledTableTr-bgr-3: var(--color-pink-1);
      --theme-StyledTableTr-bgr-4: var(--color-orange-1);
      --theme-StyledTableTr-color: var(--theme-day-violet-1);
    }

    ${StyledPaggination} {
      --theme-StyledPaggination-bgr: #f9c6bd;
      --theme-StyledPaggination-color: var(--theme-day-blue-2);
      --theme-StyledPaggination-svg: var(--theme-day-blue-2);
    }

    ${StyledSortingIcon} {
      --theme-StyledSortingIcon-fill: var(--theme-main-color);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledTableHead} {
      --theme-StyledTableHead-bgr-1: var(--theme-night-violet-4);
      --theme-StyledTableHead-bgr-2: var(--theme-night-violet-4);
    }

    ${StyledTableTd} {
      --theme-StyledColor-action: var(--theme-night-orange-1);
      --theme-StyledColor-status-success: var(--color-blue-1);
      --theme-StyledColor-action-fail: var(--color-pink-2);
    }

    ${StyledTableTr} {
      --theme-StyledTableTr-bgr-1: var(--theme-night-violet-1);
      --theme-StyledTableTr-bgr-2: var(--theme-night-violet-1);
      --theme-StyledTableTr-bgr-3: var(--theme-night-violet-4);
      --theme-StyledTableTr-bgr-4: var(--theme-night-violet-4);
      --theme-StyledTableTr-color: var(--theme-night-orange-1);
    }

    ${StyledPaggination} {
      --theme-StyledPaggination-bgr: #2c2f61;
      --theme-StyledPaggination-color: var(--theme-main-color-inverse);
      --theme-StyledPaggination-svg: var(--theme-main-color-inverse);
    }

    ${StyledSortingIcon} {
      --theme-StyledSortingIcon-fill: #AFB0C1;
    }
  }

  ${StyledColumnFilterTheme}
`;
