import { EColorScheme } from '@/redux/css';
import { useOwnTheme } from '@/styles/theme';
import React from 'react';
import {
  StyledInput,
  StyledLabelSwitch,
  StyledSpan,
  StyledTitle,
} from './styled';

interface ISwitchToggleProps {
  title: string;
}

export default function SwitchToggle({
  title = '',
}: ISwitchToggleProps): JSX.Element {
  const [theme, themeToggle] = useOwnTheme();
  const changeSwitch = function () {
    themeToggle();
  };

  return (
    <>
      <StyledLabelSwitch>
        <StyledInput
          checked={theme === EColorScheme.NIGHT}
          onChange={changeSwitch}
          type="checkbox"
        />
        <StyledSpan/>
      </StyledLabelSwitch>
      {title.length > 0 && (
        <StyledTitle onClick={changeSwitch}>{title}</StyledTitle>
      )}
    </>
  );
}
