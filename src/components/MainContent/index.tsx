import { IRoute } from '@/interfaces/IRoutes';
import React, { useMemo } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { StyledContainer, StyledWrapper } from './styled';

import { useLocation } from 'react-router-dom';
import ComingSoon from '../ComingSoon';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

interface IMainContentProps {
  routes: IRoute[];
  children: React.ReactChild | React.ReactChild[];
}

export default function MainContent({
  routes,
  children = <h1>Error</h1>,
}: IMainContentProps): JSX.Element {
  const location = useLocation();
  const currentRoute = useMemo(
    () => routes.find(({ path }) => path === location.pathname),
    [location.pathname]
  );

  return (
    <>
      <Sidebar routes={routes} />
      <StyledContainer comingSoon={!currentRoute?.comingSoon}>
        <Navbar
          title={
            currentRoute?.pageTitle
              ? currentRoute?.pageTitle
              : currentRoute?.name ?? ''
          }
        />
        <StyledWrapper className="wrapper">{children}</StyledWrapper>
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={location.pathname}
            classNames="my-node"
            timeout={300}
          >
            {currentRoute?.comingSoon ? (
              <ComingSoon />
            ) : (
              <Footer bg={currentRoute?.bgrImg} />
            )}
          </CSSTransition>
        </SwitchTransition>
      </StyledContainer>
    </>
  );
}
