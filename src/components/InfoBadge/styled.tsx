import styled from 'styled-components';
import breakpoints from '@styles/constants.styled';

export const StyledContainer = styled.section`
  display: inline-flex;
  flex-direction: column;
  padding: 31px 34px;
  border-radius: 30px;
  border: 1px solid var(--theme-text-pink-color);
  transition: all 300ms ease-out;
  @media screen and ${breakpoints.Device.tablet} {
    padding: 11px 14px;
  }
`;

export const StyledTitle = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: var(--theme-main-color-inverse);
  transition: all 300ms ease-out;
  margin-bottom: 23px;
`;

export const StyledToken = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 25.5703px;
  line-height: 31px;
  color: var(--theme-main-color-inverse);
  transition: all 300ms ease-out;
`;

export const StyledValue = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 25.5703px;
  line-height: 31px;
  letter-spacing: 0.01em;
  color: var(--theme-main-color-inverse);
  transition: all 300ms ease-out;
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTextContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  gap: 7px;
  margin-bottom: 32px;
`;
