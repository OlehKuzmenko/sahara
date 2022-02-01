import { TransactionStatus } from '@/interfaces/TransactionsStatus';
import React from 'react';
import { StyledStatus } from './styled';
interface IStatusInTable {
  statusText: TransactionStatus;
}

export default function StatusInTable({
  statusText,
}: IStatusInTable): JSX.Element {
  return <StyledStatus data-status={statusText}>{statusText} </StyledStatus>;
}
