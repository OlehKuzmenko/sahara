import styled, { css } from 'styled-components';
import { EColorScheme } from '@redux/css';

export const StyledFAQContainer = styled.div`
  width: 100%;
  max-width: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 70vh;
  overflow-y: scroll;
`;

export const StyledFAQTitle = styled.h2`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  color: var(--theme-StyledFAQTitle-color);
  margin-bottom: 9px;
`;

export const StyledFAQSubTitle = styled.h3`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 19px;
  line-height: 21px;
  width: 100%;
  text-align: left;
  color: var(--theme-StyledFAQSubTitle-color);
  margin-bottom: 5px;
`;

export const StyledFAQContent = styled.p`
  font-family: Montserrat, serif;
  font-weight: 300;
  font-size: 14px;
  line-height: 19px;
  width: 100%;
  text-align: left;
  color: var(--theme-StyledFAQContent-color);
  margin-bottom: 15px;
  padding-left: 30px;
`;

export const StyledFAQList = styled.ul`
  list-style: unset;
  align-self: flex-start;
  padding-left: 50px;
  margin-bottom: 15px;

  & li span {
    font-family: Montserrat, serif;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    text-align: left;
    color: var(--theme-StyledFAQList-color);
  }

  & li {
    color: var(--theme-StyledFAQList-color);
  }
`;

export const StyledListTitle = styled(StyledFAQContent)`
  margin-bottom: 5px;
`;

export const StyledFAQTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledFAQTitle} {
      --theme-StyledFAQTitle-color: var(--color-pink-1);
    }

    ${StyledFAQSubTitle} {
      --theme-StyledFAQSubTitle-color: var(--theme-day-blue-2);
    }

    ${StyledFAQContent} {
      --theme-StyledFAQContent-color: var(--theme-day-blue-2);
    }

    ${StyledFAQList} {
      --theme-StyledFAQList-color: var(--theme-day-blue-2);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledFAQTitle} {
      --theme-StyledFAQTitle-color: var(--color-pink-2);
    }

    ${StyledFAQSubTitle} {
      --theme-StyledFAQSubTitle-color: var(--theme-main-color-inverse)
    }

    ${StyledFAQContent} {
      --theme-StyledFAQContent-color: var(--theme-main-color-inverse)
    }

    ${StyledFAQList} {
      --theme-StyledFAQList-color: var(--theme-main-color-inverse);
    }
  }
`;