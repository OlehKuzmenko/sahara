import NotificationBar from '@/components/NotificationBar';
import React from 'react';

export default function Deposit(): JSX.Element {
  return (
    <div>
      <NotificationBar
        text='In the short run, you will be able to deposit SHRA and receive several different synthetic assets in return. Enjoy synthetic assets for private swap, farming, voting, increasing your VIP level and claim rewards.'
        text2='Withdraw pSHRA easily and receive SHRA on your eWallet' />
    </div>
  );
}
