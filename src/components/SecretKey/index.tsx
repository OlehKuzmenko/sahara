import { authWalletAddress } from '@/redux/auth';
import GradientButton from '@components/GradientButton';
import Modal from '@components/Modal';
import { openSecretKey, selectChangeSecretKeyModalState } from '@redux/modal';
import { rootElement } from '@utils/consts';
import {
  useAppDispatch,
  useAppSelector,
  useCopyToClipboard,
} from '@utils/hooks';
import React, { useState } from 'react';
import usePortal from 'react-useportal';
import {
  StyledInput,
  StyledSecretKeyBtn,
  StyledSecretKeyBtnContainer,
  StyledSecretKeyCheckbox,
  StyledSecretKeyCheckboxContainer,
  StyledSecretKeyCheckboxLabel,
  StyledSecretKeyContainer,
  StyledSecretKeyPrompt,
  StyledSecretKeyText,
  StyledSecretKeyTitle,
} from './styled';

const SecretKey = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const [checkbox, setCheckbox] = useState(false);
  const secretKeyModalState = useAppSelector(selectChangeSecretKeyModalState);
  const accountNameHash = useAppSelector(authWalletAddress);
  const [status, makeCopy] = useCopyToClipboard(accountNameHash);

  const closeSecretKeyModal = () => {
    dispatch(openSecretKey(false));
    document.body.style.overflowY = 'scroll';
  };

  const selectCheckBox = () => {
    setCheckbox((state) => !state);
  };
  const { Portal } = usePortal({
    bindTo: rootElement,
  });

  return (
    <>
      {secretKeyModalState && (
        <Portal>
          <Modal closePortal={closeSecretKeyModal}>
            <StyledSecretKeyContainer>
              <StyledSecretKeyTitle>Save Your Secret Key</StyledSecretKeyTitle>
              <StyledSecretKeyText>
                {
                  "Please backup your secret key. You will need it to withdraw your deposit back. Never provide your secret key to anyone, including Sahara team, even if they say they're from customer service"
                }
              </StyledSecretKeyText>
              <StyledInput
                type="password"
                readOnly={true}
                error={false}
                blur={true}
                value={accountNameHash}
              />
              <StyledSecretKeyBtnContainer>
                <StyledSecretKeyBtn
                  disabled={status === 'copied'}
                  onClick={makeCopy}
                >
                  {status === 'inactive' && 'copy'}
                  {status === 'copied' && 'copying'}
                </StyledSecretKeyBtn>
                <StyledSecretKeyBtn>save</StyledSecretKeyBtn>
              </StyledSecretKeyBtnContainer>
              <StyledSecretKeyPrompt>
                You can save encrypted secret keys on-chain by setting up the
                Key Account. You may create one on the account page
              </StyledSecretKeyPrompt>
              <StyledSecretKeyCheckboxContainer>
                <input
                  checked={checkbox}
                  onChange={selectCheckBox}
                  type="checkbox"
                />
                <StyledSecretKeyCheckbox />
                <StyledSecretKeyCheckboxLabel>
                  I backed up the secret key
                </StyledSecretKeyCheckboxLabel>
              </StyledSecretKeyCheckboxContainer>
              <GradientButton
                textContent="Send Deposit"
                onClick={() => closeSecretKeyModal()}
                disabled={!checkbox}
              />
            </StyledSecretKeyContainer>
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default SecretKey;
