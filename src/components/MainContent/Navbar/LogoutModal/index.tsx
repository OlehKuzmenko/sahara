import Modal from '@/components/Modal';
import { logoutUserFromWebSite } from '@/redux/auth';
import { openLogOut, selectLogOutModalState } from '@/redux/modal';
import { rootElement } from '@/utils/consts';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import React from 'react';
import usePortal from 'react-useportal';
import {
  StyledLogoutButton,
  StyledLogoutContainer,
  StyledLogoutText,
  StyledLogoutTitle,
} from './styled';

const LogOutModal = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const logOutModalState = useAppSelector(selectLogOutModalState);

  const closeLogOutModal = function () {
    dispatch(openLogOut(false));
    document.body.style.overflowY = 'scroll';
  };
  const clickToLogOutButton = function () {
    dispatch(logoutUserFromWebSite());
    dispatch(openLogOut(false));
    document.body.style.overflowY = 'scroll';
  };

  const { Portal } = usePortal({
    bindTo: rootElement,
  });
  return (
    <>
      {logOutModalState && (
        <Portal>
          <Modal closePortal={closeLogOutModal}>
            <StyledLogoutContainer>
              <StyledLogoutTitle>Log Out</StyledLogoutTitle>
              <StyledLogoutText>
                Are you sure you want to log out?
              </StyledLogoutText>
              <StyledLogoutButton
                onClick={clickToLogOutButton}
                textContent="Log Out"
              />
              <StyledLogoutButton
                onClick={closeLogOutModal}
                textContent="Cancel"
              />
            </StyledLogoutContainer>
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default LogOutModal;
