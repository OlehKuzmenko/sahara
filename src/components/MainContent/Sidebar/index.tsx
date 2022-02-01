import { IRoute } from '@/interfaces/IRoutes';
import { currentDate } from '@/utils/consts';
import { ReactComponent as LinkTreeLogo } from '@icons/linktree.svg';
import { ReactComponent as MediumLogo } from '@icons/medium.svg';
import { ReactComponent as TelegramLogo } from '@icons/telegram.svg';
import React from 'react';
import {
  BurgerBtn,
  StyledFollow,
  StyledFollowContainer,
  StyledFollowElement,
  StyledFollowLink,
  StyledLink,
  StyledLinksList,
  StyledLogoContainer,
  StyledSaharaLogo,
  StyledSidebar,
  StyledVersion,
} from './styled';

interface ISidebarProps {
  routes: IRoute[];
}

const shareButton = [
  {
    link: 'https://t.me/SaharaProtocol',
    icon: <TelegramLogo />,
  },
  {
    link: 'https://medium.com/@SaharaProtocol',
    icon: <MediumLogo />,
  },
  {
    link: 'https://linktr.ee/SaharaProtocol',
    icon: <LinkTreeLogo />,
  },
];

const ShareBlock = React.memo(function ShareBlock(): JSX.Element {
  return (
    <StyledFollow>
      <h4>Follow us on social</h4>
      <StyledFollowContainer>
        {shareButton.map(({ link, icon }, index) => (
          <StyledFollowElement key={index}>
            <StyledFollowLink to={{ pathname: link }} target="_blank">
              {icon}
            </StyledFollowLink>
          </StyledFollowElement>
        ))}
      </StyledFollowContainer>
    </StyledFollow>
  );
});

export default function Sidebar({ routes }: ISidebarProps): JSX.Element {
  return (
    <>
      <BurgerBtn />
      <StyledSidebar>
        <StyledLogoContainer target="_blank" href="https://sahara.network/">
          <StyledSaharaLogo />
        </StyledLogoContainer>
        <StyledLinksList>
          {routes
            .filter((route) => route.link)
            .map((route, index) => {
              return (
                <li key={index}>
                  <StyledLink
                    tabIndex={0}
                    activeClassName="selected"
                    to={
                      typeof route.link === 'string' ? route.link : route.path
                    }
                    exact={route.exact}
                  >
                    {route.name}
                  </StyledLink>
                </li>
              );
            })}
        </StyledLinksList>
        <ShareBlock />
        <StyledVersion>
          Version {process.env.REACT_APP_VERSION ?? '1.0'}{' '}
          {currentDate.getFullYear()}
        </StyledVersion>
      </StyledSidebar>
    </>
  );
}
