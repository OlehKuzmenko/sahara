import React from 'react';
import { StyledHash } from './styled';

interface WalletHashInTable {
  hash: string;
}

export default function WalletHashInTable({
  hash,
}: WalletHashInTable): JSX.Element {
  return <StyledHash>{hash}</StyledHash>;
}
