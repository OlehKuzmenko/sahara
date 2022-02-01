import React from 'react';
import image from '@img/ComingSoon.png';
import { StyledContainer, StyledImg, StyledText } from './styled';

export default function ComingSoon(): JSX.Element {
  return (
    <StyledContainer>
      <StyledText>COMING SOON...</StyledText>
      <StyledImg src={image} />
    </StyledContainer>
  );
}
