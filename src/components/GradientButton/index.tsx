import React from 'react';
import { StyledButton } from './styled';

export interface IGradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textContent: string;
  disabled?: boolean;
  capitalLetters?: boolean;
  svg?: string | JSX.Element;
  short?: boolean;
}

export default function GradientButton({
  textContent,
  disabled = false,
  capitalLetters = false,
  svg,
  short,
  ...props
}: IGradientButtonProps): JSX.Element {
  return (
    <StyledButton
      {...props}
      data-short={short}
      data-capitalLetter={capitalLetters}
      disabled={disabled}
    >
      {svg && svg}
      <span>{textContent}</span>
    </StyledButton>
  );
}
