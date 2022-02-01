import React from 'react';
import animation from './animation.json';
import { StyledContainer, StyledLoader, StyledOverlay, Loader } from './styled';

export function LoaderWithoutOverlay(props: unknown): JSX.Element {
  return <Loader animationData={animation} {...props} />;
}

export default function LoaderWithOverlay(): JSX.Element {
  return (
    <StyledContainer>
      <StyledOverlay />
      <StyledLoader animationData={animation} />
    </StyledContainer>
  );
}
