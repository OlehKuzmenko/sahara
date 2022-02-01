import { StyledFAQContainer, StyledFAQTitle } from '@components/FAQ/styled';
import styled, { css } from 'styled-components';
import { EColorScheme } from '@redux/css';

export const StyledPrivacyContainer = styled(StyledFAQContainer)`
  & a {
    text-decoration: underline;
    align-self: flex-start;
    font-family: Montserrat, serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    color: var(--theme-StyledPrivacyContainer-a-color);
    margin-bottom: 15px;
  }
`;

export const StyledPrivacyTitle = styled(StyledFAQTitle)`
`;

export const StyledPrivacyContent = styled.p`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: var(--theme-StyledPrivacyContent-color);
  width: 100%;
  text-align: left;
  margin-bottom: 15px;
`;


export const StyledPrivacyTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledPrivacyContent} {
      --theme-StyledPrivacyContent-color: var(--theme-day-blue-2);
    }

    ${StyledPrivacyContainer} {
      --theme-StyledPrivacyContainer-a-color: var(--theme-day-blue-2);
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledPrivacyContent} {
      --theme-StyledPrivacyContent-color: var(--theme-main-color-inverse);
    }

    ${StyledPrivacyContainer} {
      --theme-StyledPrivacyContainer-a-color: var(--theme-main-color-inverse);
    }
  }
`;