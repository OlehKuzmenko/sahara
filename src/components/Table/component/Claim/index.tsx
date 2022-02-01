import React from 'react';
import { CellProps } from 'react-table';
import { StyledActionContainer } from './styled';

interface IClaimInTable<T>
  extends React.PropsWithChildren<CellProps<Record<string, unknown>, T>> {
  text?: string;
}

export default function ClaimInTable<T>({
  text,
  ...props
}: IClaimInTable<T>): JSX.Element {
  return (
    <StyledActionContainer
      onClick={() => {
        console.log('TEST CLICK', props);
      }}
    >
      {text}
    </StyledActionContainer>
  );
}
