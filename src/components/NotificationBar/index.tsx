import React from 'react';
import { StyledBadge, StyledContainer, StyledTextContainer } from './styled';

type NotificationBarProps = {
  text: string;
  text2?: string;
}

export default function NotificationBar({text, text2} : NotificationBarProps): JSX.Element {
  return (
    <StyledContainer>
      <StyledBadge />
      <StyledTextContainer>
        <p>{text}</p>
        <p>{text2}</p>
      </StyledTextContainer>
    </StyledContainer>
  );
}
