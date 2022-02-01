import Loader from '@/components/Loader';
import bg_bottom from '@img/bg_bottom.png';
import black_dune from '@img/black_dune.png';
import red_dune from '@img/red_dune.png';
import { IRoute } from '@interfaces/IRoutes';
import { UserStatusType } from '@interfaces/IUser';
import { LinksEnum } from '@interfaces/LinksEnum';
import ErrorFallback from '@layouts/Fallback';
import { userLoggedStatus } from '@redux/auth';
import { useAppSelector } from '@utils/hooks';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import MainContent from './components/MainContent';
import logo from './logo.svg';
import VipLevels from './pages/vip_levels';
import { GlobalStyle, useOwnTheme } from '@styles/theme';
import { MainAuthorized, MainUnauthorized } from '@pages/main';
import Deposit from './pages/Deposit';
import PrivateSwap from './pages/PrivateSwap';
import Farming from './pages/Farming';
import Rewards from './pages/Rewards';
import Voting from './pages/Voting';

const Vesting = React.lazy(() => import('@pages/vesting'));

const routes: {
  [UserStatusType.VISITOR]: IRoute[];
  [UserStatusType.AUTHED]: IRoute[];
} = {
  [UserStatusType.VISITOR]: [
    {
      name: 'My Assets',
      pageTitle: 'AVAILABLE ASSETS',
      path: LinksEnum.MAIN,
      exact: true,
      link: true,
      bgrImg: {
        dark: black_dune,
        light: bg_bottom,
      },
      icon: () => <img alt='main page' src={logo} />,
      main: () => <MainUnauthorized />,
    },
    {
      name: 'Vesting',
      path: LinksEnum.VESTING,
      exact: true,
      link: true,
      bgrImg: {
        dark: red_dune,
        light: bg_bottom,
      },
      icon: () => <img alt='vesting page' src={logo} />,
      main: () => <Vesting />,
    },
    {
      name: 'Vip Levels',
      path: LinksEnum.VIP_LEVELS,
      exact: true,
      link: true,
      icon: () => <img alt='vip levels page' src={logo} />,
      main: () => <VipLevels />,
      comingSoon: true,
    },
    {
      name: 'Deposit/Withdraw',
      path: LinksEnum.DEPOSIT_WITHDRAW,
      exact: true,
      link: true,
      icon: () => <img alt='deposit page' src={logo} />,
      main: () => <Deposit />,
      comingSoon: true,
    },
    {
      name: 'Private Swap',
      path: LinksEnum.PRIVATE_SWAP,
      exact: true,
      link: true,
      icon: () => <img alt='private swap page' src={logo} />,
      main: () => <PrivateSwap />,
      comingSoon: true,
    },
    {
      name: 'Farming',
      path: LinksEnum.FARMING,
      exact: true,
      link: true,
      icon: () => <img alt='farming page' src={logo} />,
      main: () => <Farming />,
      comingSoon: true,
    },
    {
      name: 'Rewards',
      path: LinksEnum.REWARDS,
      exact: true,
      link: true,
      icon: () => <img alt='rewards page' src={logo} />,
      main: () => <Rewards />,
      comingSoon: true,
    },
    {
      name: 'Voting',
      path: LinksEnum.VOTING,
      exact: true,
      link: true,
      icon: () => <img alt='voting page' src={logo} />,
      main: () => <Voting />,
      comingSoon: true,
    },
    {
      name: 'Not Match',
      path: LinksEnum.NOTFOUND,
      link: false,
      main: () => <Redirect to={LinksEnum.MAIN} />,
    },
  ],
  [UserStatusType.AUTHED]: [
    {
      name: 'My Assets',
      path: LinksEnum.MAIN,
      exact: true,
      link: true,
      bgrImg: {
        dark: black_dune,
        light: bg_bottom,
      },
      icon: () => <img alt='main page' src={logo} />,
      main: () => <MainAuthorized />,
    },
    {
      name: 'Vesting',
      path: LinksEnum.VESTING,
      exact: true,
      link: true,
      bgrImg: {
        dark: red_dune,
        light: bg_bottom,
      },
      icon: () => <img alt='vesting page' src={logo} />,
      main: () => <Vesting />,
    },
    {
      name: 'Deposit/Withdraw',
      path: LinksEnum.DEPOSIT_WITHDRAW,
      exact: true,
      link: true,
      icon: () => <img alt='deposit page' src={logo} />,
      main: () => <Deposit />,
      comingSoon: true,
    },
    {
      name: 'Private Swap',
      path: LinksEnum.PRIVATE_SWAP,
      exact: true,
      link: true,
      icon: () => <img alt='private swap page' src={logo} />,
      main: () => <PrivateSwap />,
      comingSoon: true,
    },
    {
      name: 'Farming',
      path: LinksEnum.FARMING,
      exact: true,
      link: true,
      icon: () => <img alt='farming page' src={logo} />,
      main: () => <Farming />,
      comingSoon: true,
    },
    {
      name: 'Rewards',
      path: LinksEnum.REWARDS,
      exact: true,
      link: true,
      icon: () => <img alt='rewards page' src={logo} />,
      main: () => <Rewards />,
      comingSoon: true,
    },
    {
      name: 'Voting',
      path: LinksEnum.VOTING,
      exact: true,
      link: true,
      icon: () => <img alt='voting page' src={logo} />,
      main: () => <Voting />,
      comingSoon: true,
    },
    {
      name: 'Not Match',
      path: LinksEnum.NOTFOUND,
      link: false,
      main: () => <Redirect to={LinksEnum.MAIN} />,
    },
  ],
};

function App(): JSX.Element {
  const location = useLocation();
  const type = useAppSelector(userLoggedStatus);
  useOwnTheme();

  return (
    <>
      <MainContent routes={routes[type]}>
        <SwitchTransition mode='out-in'>
          <CSSTransition
            key={location.pathname}
            classNames='my-node'
            timeout={300}
          >
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<Loader />}>
                <Switch location={location}>
                  {routes[type].map((route, index) => (
                    <Route key={index} path={route.path} exact={route.exact}>
                      {route.main}
                    </Route>
                  ))}
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </CSSTransition>
        </SwitchTransition>
      </MainContent>
      <GlobalStyle />
    </>
  );
}

export default App;
