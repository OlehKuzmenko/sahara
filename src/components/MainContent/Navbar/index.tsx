import GradientButton, {
  IGradientButtonProps,
} from '@/components/GradientButton';
import PageTitle from '@/components/PageTitle';
import SwitchToggle from '@/components/Toggle';
import { UserStatusType, WalletType } from '@/interfaces/IUser';
import withAuthType from '@/layouts/Auth/AuthBasedLayout';
import { authWalletAddress, authWalletType } from '@/redux/auth';
import { EColorScheme, selectCurrentColorMode } from '@/redux/css';
import { openConnectWallet } from '@/redux/modal';
import { withThemeType } from '@/styles/theme';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import Background from '@img/bg.png';
import MDay from '@img/MetaMask Logo (Navy).png';
import MNight from '@img/MetaMask Logo (White).png';
import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ConnectWallet from './ConnectWallet';
import GoComponent from './GoComponent';
import Logout from './Logout';
import {
  StyledIconWalletConnected,
  StyledIMGContainer,
  StyledNavbar,
  StyledOverlayHolder,
  StyledSNavbarContainer,
  StyledTitleContainer,
  StyledToggleContainer, StyledTooltip, StyledTooltipWrapper,
} from './styled';

interface INavBarProps extends React.ParamHTMLAttributes<HTMLDivElement> {
  title: string;
}

const DayMetamask = withThemeType([EColorScheme.DAY])(() => <img alt="metamask icon" src={MDay} />);
const NightMetamask = withThemeType([EColorScheme.NIGHT])(() => (
  <img alt="metamask icon" src={MNight} />
));

function WalletFabric({ type }: { type: WalletType }): JSX.Element {
  return (
    {
      [WalletType.METAMASK]: (
        <>
          <DayMetamask />
          <NightMetamask />
        </>
      ),
      [WalletType.WALLETCONNECT]: <StyledIconWalletConnected />,
    }[type] ?? null
  );
}

const IconFabric = React.memo(WalletFabric, (prevProps, nextProps) => {
  return prevProps === nextProps;
});

const VisitorConnectWalletButton = withAuthType([UserStatusType.VISITOR])(
  (props: IGradientButtonProps) => {
    const dispatch = useAppDispatch();

    const clickToConnectWallet = function() {
      dispatch(openConnectWallet(true));
      document.body.style.overflowY = 'hidden';
    };

    return <GradientButton {...props} onClick={clickToConnectWallet} />;
  },
);
const AuthorizedConnectWalletButton = withAuthType([UserStatusType.AUTHED])(
  () => {
    const accountNameHash = useAppSelector(authWalletAddress);
    const walletType = useAppSelector(authWalletType) as WalletType;
    return (
      <StyledTooltipWrapper>
        <GradientButton
          data-tip="React-tooltip"
          data-for='wallet-tip'
          textContent={accountNameHash}
          short={true}
          svg={
            <StyledIMGContainer>
              <IconFabric type={walletType} />
            </StyledIMGContainer>
          }
        />
        <StyledTooltip id='wallet-tip' place="bottom" effect="solid">
          {accountNameHash}
        </StyledTooltip>
      </StyledTooltipWrapper>
    );
  },
);

function useThemeTitleFabric(): string {
  const theme = useAppSelector(selectCurrentColorMode);
  return {
    [EColorScheme.DAY]: 'Day mode',
    [EColorScheme.NIGHT]: 'Night mode',
  }[theme];
}

export default function Navbar({
                                 title = '',
                                 ...props
                               }: INavBarProps): JSX.Element {
  const toggleTitle = useThemeTitleFabric();
  return (
    <StyledOverlayHolder {...props} background={Background}>
      <StyledNavbar className='wrapper'>
        <StyledToggleContainer>
          <SwitchToggle title={toggleTitle} />
        </StyledToggleContainer>
        <StyledSNavbarContainer>
          <GoComponent />
          <VisitorConnectWalletButton textContent='Connect Wallet' />
          <AuthorizedConnectWalletButton />
          <Logout />
        </StyledSNavbarContainer>
      </StyledNavbar>
      <StyledTitleContainer className='wrapper'>
        <SwitchTransition mode='out-in'>
          <CSSTransition key={title} classNames='my-node' timeout={300}>
            <PageTitle text={title} />
          </CSSTransition>
        </SwitchTransition>
        <ConnectWallet />
      </StyledTitleContainer>
    </StyledOverlayHolder>
  );
}
