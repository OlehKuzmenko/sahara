import styled from 'styled-components';
import breakpoints from '@styles/constants.styled';

export const StyledSection = styled.section`
  @media screen and ${breakpoints.Device.tablet} {
    padding-left: 0;
  }
`;
