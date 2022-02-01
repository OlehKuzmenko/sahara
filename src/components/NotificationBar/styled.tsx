import styled, { css } from 'styled-components';
import React from 'react';
import { ReactComponent as Question } from '@icons/question.svg';
import { EColorScheme } from '@/redux/css';

const StyledQuestionContainer = styled.div`
  padding: 12px 23px;
  background: #ee765f;
  clip-path: polygon(0 0, 100% 0%, 88% 100%, 0% 100%);
  display: flex;
  align-items: center;
`;
const StyledQuestionMark = styled(Question)``;

export const StyledTextContainer = styled.div`
  width: 100%;
  margin: 13px;
`;

export const StyledContainer = styled.section`
  border-radius: 10px;
  transition: all 300ms ease-out;
  background: var(--theme-main-color);
  display: flex;
  overflow: hidden;

  p {

    &:first-child {
      margin-bottom: 10px;
    }

    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: var(--theme-main-color-inverse);
    transition: all 300ms ease-out;
  }
`;

export function StyledBadge(): JSX.Element {
  return (
    <StyledQuestionContainer>
      <StyledQuestionMark />
    </StyledQuestionContainer>
  );
}

export const StyledNotificationBarTheme = css`
  &[data-theme='${EColorScheme.DAY}'] {
    ${StyledContainer} {
      --theme-main-color: #edeef2;
    }
  }

  &[data-theme='${EColorScheme.NIGHT}'] {
    ${StyledContainer} {
      --theme-main-color: #2c2f61;
    }
  }
`;
