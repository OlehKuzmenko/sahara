import { StyledComingSoonTheme } from '@/components/ComingSoon/styled';
import { StyledSelectTheme } from '@/components/Dropdown/styled';
import { StyledGradientButtonTheme } from '@/components/GradientButton/styled';
import { StyledMainComponentTheme } from '@/components/MainContent/styled';
import { StyledTabsTheme } from '@/components/MainPageTabs/styled';
import { StyledNotificationBarTheme } from '@/components/NotificationBar/styled';
import { StyledSwitchTheme } from '@/components/Toggle/styled';
import { StyledMainTheme } from '@/pages/main/styled';
import {
  changeColorScheme,
  EColorScheme,
  selectCurrentColorMode,
} from '@/redux/css';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import { StyledInputTheme } from '@components/Input/styled';
import { StyledSliderTheme } from '@components/Slider/styled';
import { StyledTableTheme } from '@components/Table/styled';
import breakpoints from '@styles/constants.styled';
import React, { useEffect } from 'react';
import { createGlobalStyle, css } from 'styled-components';
import { StyledTabsElementTheme } from '@pages/main/TabsElement/styled';
import { StyledModalTheme } from '@/components/Modal/styled';
import { StyledSecretKeyTheme } from '@components/SecretKey/styled';
import { StyledLoaderTheme } from '@/components/Loader/styled';
import { StyledFAQTheme } from '@components/FAQ/styled';
import { StyledPrivacyTheme } from '@components/PrivacyPolicy/styled';

/**
 * This HOC return JSX elemets depends on current theme mode
 */

export function withThemeType(themeType: EColorScheme[]) {
  return function wrappedFunction<P>(WrappedComponent: React.ComponentType<P>) {
    return function withProps(props: P): JSX.Element | null {
      const currentTheme = useAppSelector(selectCurrentColorMode);
      if (themeType.includes(currentTheme)) {
        return <WrappedComponent {...props} />;
      }
      return null;
    };
  };
}

/**
 * Use this hook if you whant to change color scheme of site manualy
 */
const mql = window.matchMedia('(prefers-color-scheme: dark)');

export function useOwnTheme(): [EColorScheme, () => void] {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectCurrentColorMode);
  const themeToggle = () => {
    const newTheme =
      theme === EColorScheme.DAY ? EColorScheme.NIGHT : EColorScheme.DAY;
    dispatch(changeColorScheme(newTheme));
  };
  const chengeInEventListener = function (event: MediaQueryListEvent) {
    const newTheme = event.matches ? EColorScheme.NIGHT : EColorScheme.DAY;
    dispatch(changeColorScheme(newTheme));
  };
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);
  useEffect(() => {
    mql.addEventListener('change', chengeInEventListener);
    return () => {
      mql.removeEventListener('change', chengeInEventListener);
    };
  }, []);
  return [theme, themeToggle];
}

const themeGrouped = css`
  ${StyledMainTheme}
  ${StyledSwitchTheme}
  ${StyledMainComponentTheme}
  ${StyledGradientButtonTheme}
  ${StyledTableTheme}
  ${StyledComingSoonTheme}
  ${StyledNotificationBarTheme}
  ${StyledSliderTheme}
  ${StyledInputTheme}
  ${StyledTabsTheme}
  ${StyledSelectTheme}
  ${StyledTabsElementTheme}
  ${StyledModalTheme}
  ${StyledSecretKeyTheme}
  ${StyledLoaderTheme}
  ${StyledFAQTheme}
  ${StyledPrivacyTheme}
`;

export const GlobalStyle = createGlobalStyle`
  body {

    @media screen and ${breakpoints.Device.mobile} {
      &.modal-open {
        overflow: hidden;
      }
    }

    --main-wallet-width: 233px;
    --main-top-padding: 120px;
    --main-footer-height: 96px;
    --sidebar-initial-width: 240px;
    --main-max-width: 1266px;
    --main-content-overlapping: -100px;
    @media screen and ${breakpoints.Device.tablet} {
      --main-content-overlapping: -50px;
    }


    .wrapper {
      --main-padding-value: 83px;
      padding-right: var(--main-padding-value);
      padding-left: var(--main-padding-value);
      max-width: var(--main-max-width);
      margin-left: auto;
      margin-right: auto;
      @media screen and (max-width: 1120px) {
        --main-padding-value: 25px;
      }
    }

    --color-white-1: #252222;
    --color-pink-1: #A01F83;
    --color-pink-2: #E4536C;
    --color-blue-1: #52C1DC;
    --color-orange-1: #EE765F;
    --color-orange-2: #EE745F;
    --theme-day-blue-2: #232854;

    &[data-theme="${EColorScheme.DAY}"] {
      --theme-main-color: #ffffff;
      --theme-main-color-inverse: #252856;
      --theme-text-pink-color: var(--color-pink-1);
    }

    &[data-theme="${EColorScheme.NIGHT}"] {
      --theme-main-color: #252856;
      --theme-main-color-inverse: #ffffff;
      --theme-night-violet-1: #383A69;
      --theme-night-violet-2: #64678B;
      --theme-night-violet-3: #232854;
      --theme-night-violet-4: #4F517A;
      --theme-night-orange-1: #F7A729;
      --theme-noght-grey-1: #CFCBDB;
      --theme-text-pink-color: var(--color-pink-2);
    }

    ${themeGrouped}
  }
`;

export default GlobalStyle;
