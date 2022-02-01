import { FormatDigit } from '@/utils/functions';
import React from 'react';
import GradientButton from '../GradientButton';
import {
  StyledButtonContainer,
  StyledContainer,
  StyledTextContainer,
  StyledTitle,
  StyledToken,
  StyledValue,
} from './styled';

interface IInfoBadgeProps extends React.ParamHTMLAttributes<HTMLDivElement> {
  title: string;
  token: string;
  value: number;
  minimumFractionDigits?: number;
  buttonConfig?: {
    textContent: string;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
    disabled?: boolean;
  };
}

export default function InfoBadge({
  title,
  token,
  value,
  buttonConfig,
  minimumFractionDigits = 4,
}: IInfoBadgeProps): JSX.Element {
  return (
    <StyledContainer>
      <StyledTitle>{title ?? ''}</StyledTitle>
      <StyledTextContainer>
        <StyledToken>{token ?? ''}</StyledToken>
        <StyledValue>
          {FormatDigit(value, { minimumFractionDigits }) ?? ''}
        </StyledValue>
      </StyledTextContainer>
      <StyledButtonContainer>
        {buttonConfig && (
          <GradientButton
            disabled={value <= 0}
            capitalLetters={true}
            {...buttonConfig}
          />
        )}
      </StyledButtonContainer>
    </StyledContainer>
  );
}
