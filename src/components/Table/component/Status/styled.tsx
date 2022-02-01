import { TransactionStatus } from '@/interfaces/TransactionsStatus';
import styled from 'styled-components';

export const StyledStatus = styled.span`
  &[data-status='${TransactionStatus.SUCCESS}'] {
    color: var(--theme-StyledColor-status-success);
  }
  &[data-status='${TransactionStatus.FAIL}'] {
    color: var(--theme-StyledColor-action-fail);
  }
`;
