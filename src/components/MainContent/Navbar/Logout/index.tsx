import { UserStatusType } from '@/interfaces/IUser';
import withAuthType from '@/layouts/Auth/AuthBasedLayout';
import { openLogOut } from '@/redux/modal';
import { useAppDispatch } from '@/utils/hooks';
import { ReactComponent as LogoutIcon } from '@icons/logout.svg';
import React from 'react';
import LogOutModal from '../LogoutModal';
import { StyledButton } from './styled';

function Logout(): JSX.Element {
  const dispatch = useAppDispatch();

  const openLogOutModal = function () {
    dispatch(openLogOut(true));
    document.body.style.overflowY = 'hidden';
  };

  return (
    <>
      <StyledButton onClick={openLogOutModal}>
        <LogoutIcon />
      </StyledButton>
      <LogOutModal />
    </>
  );
}

export default withAuthType([UserStatusType.AUTHED])(Logout);
