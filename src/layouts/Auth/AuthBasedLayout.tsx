import { UserStatusType } from '@/interfaces/IUser';
import { useAppSelector } from '@/utils/hooks';
import { userLoggedStatus } from '@redux/auth';
import React from 'react';

export default function withAuthType(themeType: UserStatusType[]) {
  return function wrappedFunction<P>(WrappedComponent: React.ComponentType<P>) {
    return function withProps(props: P): JSX.Element | null {
      const currentAuthStatus = useAppSelector(userLoggedStatus);
      if (themeType.includes(currentAuthStatus)) {
        return <WrappedComponent {...props} />;
      }
      return null;
    };
  };
}
