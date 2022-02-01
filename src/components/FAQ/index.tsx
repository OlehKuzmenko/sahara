import React from 'react';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { openFAQ, selectChangeFAQModalState } from '@redux/modal';
import usePortal from 'react-useportal';
import { rootElement } from '@utils/consts';
import Modal from '@components/Modal';
import {
  StyledFAQContainer,
  StyledFAQContent,
  StyledFAQList,
  StyledFAQSubTitle,
  StyledFAQTitle, StyledListTitle,
} from '@components/FAQ/styled';

const FAQ = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const FAQModalState = useAppSelector(selectChangeFAQModalState);

  const closeFAQModal = () => {
    dispatch(openFAQ(false));
    document.body.style.overflowY = 'scroll';
  };

  const { Portal } = usePortal({
    bindTo: rootElement,
  });

  return (
    <>
      {FAQModalState && (
        <Portal>
          <Modal closePortal={closeFAQModal}>
            <StyledFAQContainer>
              <StyledFAQTitle>
                FAQ
              </StyledFAQTitle>
              <StyledFAQSubTitle>
                What is Sahara protocol?
              </StyledFAQSubTitle>
              <StyledFAQContent>
                Sahara is a DeFi ecosystem that connects real world value with blockchain, in complete privacy. Users
                can connect to the Sahara multi-chain decentralized platform and convert SHRA tokens into synthetic
                assets in privacy, as well as enjoy DeFi products.
              </StyledFAQContent>
              <StyledFAQSubTitle>
                How is Sahara different from other Privacy Preserving Protocols?
              </StyledFAQSubTitle>
              <StyledFAQList>
                <li><span>Sahara has Web3 ready for all DeFi applications</span></li>
                <li><span>You can launch multiple networks</span></li>
                <li><span>You can swap a variety of synthetic assets internally</span></li>
                <li>
                  <span>If you are an institutional user, you can use Multisig and Hard wallet backup integration</span>
                </li>
                <li><span>You can enjoy a variety of De-Fi products on the platform</span></li>
                <li><span>No slippage for transactions</span></li>
                <li><span>Browser Extension Wallet for your convenience</span></li>
                <li><span>Advanced user interface and user experience</span></li>
              </StyledFAQList>
              <StyledFAQSubTitle>
                Which blockchain is Sahara built on?
              </StyledFAQSubTitle>
              <StyledFAQContent>
                Due to considerable fees on ether, the team is considering other chains to start the protocol on
              </StyledFAQContent>
              <StyledFAQSubTitle>
                What functions can I perform on the Sahara platform?
              </StyledFAQSubTitle>
              <StyledListTitle>
                On the platform you can:
              </StyledListTitle>
              <StyledFAQList>
                <li><span>deposit / withdraw crypto coins</span></li>
                <li><span>create synthetic assets such as pUSD, pBTC, pGold, pTesla</span></li>
                <li><span>do private swaps</span></li>
                <li><span>do farming</span></li>
                <li><span>vote for new features on the platform</span></li>
                <li><span>get staking rewards via the token model</span></li>
              </StyledFAQList>
              <StyledFAQSubTitle>
                How can I do private transactions?
              </StyledFAQSubTitle>
              <StyledFAQContent>
                After depositing the tokens, a secret key will be generated which will serve as a proof for token
                withdrawal.
                This means that smart contracts will store the deposit data that is tied to the key, not the wallet.
                The deposited tokens can be withdrawn by any other account. When there are many subsequent transactions
                in the pool, it is impossible to link deposits and withdrawals to each other, thus preserving privacy on
                the public blockchain.
              </StyledFAQContent>
              <StyledFAQSubTitle>
                What is a synthetic asset and how can I use it?
              </StyledFAQSubTitle>
              <StyledFAQContent>
                Cryptocurrency-based synthetic assets aim to give users exposure to a variety of different assets
                without needing to hold the underlying asset. This could be anything from fiat currencies, such as the
                United States dollar or the Japanese yen, to commodities like gold and silver, as well as index funds or
                other digital assets.
                On the Sahara platform, you can safely convert one private synthetic asset into another synthetic asset.
              </StyledFAQContent>
              <StyledFAQSubTitle>
                Can I exchange one private token to another privately on the platform?
              </StyledFAQSubTitle>
              <StyledFAQContent>
                Yes, the swapping functionality is in the development stage and will be added to the platform in the
                future.
              </StyledFAQContent>
              <StyledFAQSubTitle>
                What is the maximum slippage on the platform?
              </StyledFAQSubTitle>
              <StyledFAQContent>
                No slippage on the platform.
              </StyledFAQContent>
              <StyledFAQSubTitle>
                What is the Sahara Governance Token?
              </StyledFAQSubTitle>
              <StyledFAQContent>
                SHRA is the governance token of the Sahara platform. You can participate in the platform governance
                using SHRA tokens. You will vote for functions you’d like to have implemented on the platform.
              </StyledFAQContent>
              <StyledFAQSubTitle>
                Has the protocol been audited?
              </StyledFAQSubTitle>
              <StyledFAQContent>
                Auditing of the protocol is in progress.
              </StyledFAQContent>
            </StyledFAQContainer>
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default FAQ;