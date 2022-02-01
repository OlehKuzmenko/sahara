import React from 'react';
import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { selectAuth, clearAuthState } from '@redux/auth';
import Loader from '@/components/Loader';

interface IAuthLayoutProps {
  children: JSX.Element;
}

export default function AuthLayoutBlock({
                                          children,
                                        }: IAuthLayoutProps): JSX.Element {
  const dispatch = useAppDispatch();
  // const pending = true;
  const { pending } = useAppSelector(selectAuth);
  const timeoutlRef: { current: NodeJS.Timeout | null } = useRef(null);

  useEffect(() => {
    if (pending) {
      const id = setTimeout(() => {
        if (pending) {
          dispatch(clearAuthState());
        }
      }, 5000);
      timeoutlRef.current = id;
    }
    return () => {
      clearTimeout(timeoutlRef.current as NodeJS.Timeout);
    };
  }, []);

  if (pending) {
    return (
      <>
        <Loader />
        {children}
      </>
    );
  }

  return children;
}
