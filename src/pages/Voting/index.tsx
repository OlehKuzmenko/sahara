import NotificationBar from '@/components/NotificationBar';
import React from 'react';

export default function Voting(): JSX.Element {
  return (
    <div>
      <NotificationBar
        text='In the short run, you will be able to participate in the platform governance, using SHRA tokens. You will vote for functions you desire to be implemented on the platform'
      />
    </div>
  );
}
