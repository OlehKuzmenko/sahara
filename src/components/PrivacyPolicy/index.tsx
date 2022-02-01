import React from 'react';
import { useAppDispatch, useAppSelector } from '@utils/hooks';
import { openPrivacy, selectChangePrivacyModalState } from '@redux/modal';
import usePortal from 'react-useportal';
import { rootElement } from '@utils/consts';
import Modal from '@components/Modal';
import { StyledPrivacyContainer, StyledPrivacyContent, StyledPrivacyTitle } from '@components/PrivacyPolicy/styled';

const PrivacyPolicy = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const privacyModalState = useAppSelector(selectChangePrivacyModalState);

  const closePrivacyModal = () => {
    dispatch(openPrivacy(false));
    document.body.style.overflowY = 'scroll';
  };

  const { Portal } = usePortal({
    bindTo: rootElement,
  });

  return (
    <>
      {privacyModalState && (
        <Portal>
          <Modal closePortal={closePrivacyModal}>
            <StyledPrivacyContainer>
              <StyledPrivacyTitle>
                PRIVACY & COOKIES
              </StyledPrivacyTitle>
              <StyledPrivacyContent>
                {`
                  Sahara takes privacy very seriously and does not collect any personal data. The Sahara website doesn’t
                   collect personal information and no commercial trackers are used. The software developed by Sahara is
                    free and not subject to any intellectual property claims from Sahara (see the licensing terms and 
                    conditions in the IP-section), but for information purposes only it can be stated that it also 
                    doesn’t collect any personal data from its users.
                `}
              </StyledPrivacyContent>
              <StyledPrivacyContent>
                {`
                Sahara is committed to helping users understand the General Data Protection Regulation (GDPR) and 
                California Consumer Privacy Act (CCPA) and similar in other parts of the world - but as stated above 
                Sahara doesn’t collect any personal data and therefore doesn’t represent any services under these 
                regulations. For this reason, Sahara doesn’t offer any Data Processing Agreement.
                `}
              </StyledPrivacyContent>
              <StyledPrivacyContent>
                {`
                  Sahara Protocol's DAO sponsors development of Open Source Software integrating privacy protecting 
                  solutions, which is key to comply with financial regulations privacy requirements and global data 
                  privacy regulation e.g., GDPR. This is in opposition to the “AEC” approach – Privacy and Anonymity are
                   distinctly different in spirit and objective. Sahara Protocol's aim is to encourage and support 
                   development of regulatory compliant solutions as they are defined by the FATF.
                `}
              </StyledPrivacyContent>
              <StyledPrivacyContent>
                {`
                  Emails sent to Sahara unencrypted may contain your personal information and in doing so you give 
                  consent to Sahara and our email provider to handle your information.
                `}
              </StyledPrivacyContent>
              <StyledPrivacyContent>
                {`
                  Sahara.network is hosted on Vercel and contains cookies from Google analytics.
                `}
              </StyledPrivacyContent>
              <StyledPrivacyContent>
                {`
                To read more about how Google Analytics ensure that data is kept secure and remains confidential, read:
                `}
              </StyledPrivacyContent>
              <a
                href='https://support.google.com/analytics/answer/6004245'
                target="_blank"
                rel="noreferrer"
              >
                https://support.google.com/analytics/answer/6004245
              </a>
              <StyledPrivacyContent>
                {`
                  We highly recommend that you visit the website via a VPN.
                `}
              </StyledPrivacyContent>
            </StyledPrivacyContainer>
          </Modal>
        </Portal>
      )}
    </>
  );
};

export default PrivacyPolicy;