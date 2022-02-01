import React from 'react';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { openTerms, selectChangeTermsModalState } from '@redux/modal';
import usePortal from 'react-useportal';
import { rootElement } from '@utils/consts';
import Modal from '@components/Modal';
import { StyledTermsContainer, StyledTermsContent, StyledTermsTitle } from '@components/Terms/styled';

const Terms = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const termsModalState = useAppSelector(selectChangeTermsModalState);

  const closeTermsModal = () => {
    dispatch(openTerms(false));
    document.body.style.overflowY = 'scroll';
  };

  const { Portal } = usePortal({
    bindTo: rootElement,
  });

  return (
    <>
      {termsModalState && (
        <Portal>
          <Modal closePortal={closeTermsModal}>
            <StyledTermsContainer>
              <StyledTermsTitle>
                TERMS & CONDITIONS
              </StyledTermsTitle>
              <StyledTermsContent>
                {`
                  Sahara isn't a company but a DAO with token holder governance.Sahara's software is made available to 
                  the public under the GNU licensing referenced in the Impressum. Sahara assumes no responsibility for 
                  any consequential effects arising from use of software or any other materials developed by Sahara 
                  Network or other contributors. The terms set out in the Whitepaper shall apply to all use of Sahara 
                  Network, incl. the stated geographical restrictions.
                `}
              </StyledTermsContent>
            </StyledTermsContainer>
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default Terms;