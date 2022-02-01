import Modal from '@/components/Modal';
import { WalletType } from '@/interfaces/IUser';
import { loginUserToWebSite } from '@/redux/auth';
import {
  openConnectWallet,
  selectConnectWalletModalState,
} from '@/redux/modal';
import { rootElement } from '@/utils/consts';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import {
  StyledConnectWalletContainer,
  StyledConnectWalletText,
  StyledConnectWalletTitle,
  StyledGradientButton,
} from '@components/MainContent/Navbar/ConnectWallet/styled';
import { ReactComponent as Metamask } from '@icons/METAMASK.svg';
import { ReactComponent as WalletConnect } from '@icons/WalletConnect.svg';
import React from 'react';
import usePortal from 'react-useportal';

const ConnectWallet = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const connectWalletModalState = useAppSelector(selectConnectWalletModalState);

  const { Portal } = usePortal({
    bindTo: rootElement,
  });

  const clickToConnectWallet = function (event: React.MouseEvent<HTMLElement>) {
    const target = event.currentTarget as HTMLDivElement;
    const walletType = target.id as WalletType;
    if (Object.values(WalletType).includes(walletType)) {
      dispatch(loginUserToWebSite(walletType));
      dispatch(openConnectWallet(false));
      document.body.style.overflowY = 'scroll';
    }
  };

  const closeConnectWalletModal = function () {
    dispatch(openConnectWallet(false));
    document.body.style.overflowY = 'scroll';
  };

  return (
    <>
      {connectWalletModalState && (
        <Portal>
          <Modal closePortal={closeConnectWalletModal}>
            <StyledConnectWalletContainer>
              <StyledConnectWalletTitle>
                Connect Wallet
              </StyledConnectWalletTitle>
              <StyledConnectWalletText>
                Please choose your wallet
              </StyledConnectWalletText>
              <StyledGradientButton
                onClick={clickToConnectWallet}
                id={WalletType.METAMASK}
                textContent=""
                svg={<Metamask />}
              />
              <StyledGradientButton
                onClick={clickToConnectWallet}
                id={WalletType.WALLETCONNECT}
                textContent=""
                svg={<WalletConnect />}
              />
            </StyledConnectWalletContainer>
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default ConnectWallet;
