import { IBgrImg } from '@/interfaces/IRoutes';
import { LinksEnum } from '@/interfaces/LinksEnum';
import { useOwnTheme } from '@/styles/theme';
import React from 'react';
import {
  StyledFooter,
  StyledIMG,
  StyledLinkContainer,
  StyledLogo,
  StyledNavLink,
  StyledWrapper,
} from './styled';
import { useAppDispatch } from '@utils/hooks';
import { openFAQ, openPrivacy, openTerms } from '@redux/modal';
import FAQ from '@components/FAQ';
import PrivacyPolicy from '@components/PrivacyPolicy';
import Terms from '@components/Terms';

interface IFooterProps {
  bg?: IBgrImg;
}

export default function Footer({ bg }: IFooterProps): JSX.Element {
  const [theme] = useOwnTheme();
  const dispatch = useAppDispatch();

  const openFAQModal = () => {
    dispatch(openFAQ(true));
    document.body.style.overflowY = 'hidden';
  };

  const openPrivacyModal = () => {
    dispatch(openPrivacy(true));
    document.body.style.overflowY = 'hidden';
  };

  const openTermsModal = () => {
    dispatch(openTerms(true));
    document.body.style.overflowY = 'hidden';
  };

  return (
    <StyledFooter>
      {Object.keys(bg ?? Object).length > 0 && (
        <StyledIMG src={(bg as IBgrImg)[theme] ?? ''} />
      )}
      <StyledWrapper className='wrapper'>
        <StyledNavLink to={LinksEnum.MAIN}>
          <StyledLogo />
        </StyledNavLink>
        <StyledLinkContainer>
          <StyledNavLink
            onClick={openFAQModal}
            // to={LinksEnum.HELP}
            to='#'
          >
            FAQ
          </StyledNavLink>
          <FAQ />
          <StyledNavLink
            to='#'
            // to={LinksEnum.CONTACT}
          >
            SUPPORT
          </StyledNavLink>
          <StyledNavLink
            onClick={openPrivacyModal}
            // to={LinksEnum.PRIVACY}
            to='#'
          >
            PRIVACY POLICY
          </StyledNavLink>
          <PrivacyPolicy />
          <StyledNavLink
            onClick={openTermsModal}
            to='#'
            // to={LinksEnum.TERMS}
          >
            Terms
          </StyledNavLink>
          <Terms />
        </StyledLinkContainer>
      </StyledWrapper>
    </StyledFooter>
  );
}
