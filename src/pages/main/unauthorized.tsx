import InfoBadge from '@/components/InfoBadge';
import MainPageTabs from '@/components/MainPageTabs';
import { FormatDigit } from '@/utils/functions';
import FirstTab from '@pages/main/TabsElement/FirstTab';
import SecondTab from '@pages/main/TabsElement/SecondTab';
import React from 'react';
import {
  StyledBadgeContainer,
  StyledContainer,
  StyledDataContainer,
  StyledInfo,
  StyledTokenDataContainer,
  StyledTokenName,
  StyledTotalContainer,
  StyledTotalPrice,
  StyledValue,
} from './styled';

const TabData = [
  {
    tabName: 'DEPOSIT',
    tabData: <FirstTab />,
  },
  {
    tabName: 'WITHDRAW',
    tabData: <SecondTab />,
  },
];

export default function MainUnauthorized(): JSX.Element {
  const digit = 0;
  const totalPrice = 0;

  const clickOnBadge = function () {
    console.log('EVENT');
  };

  return (
    <StyledContainer className="main-page">
      <StyledTokenDataContainer>
        <StyledTokenName data-type="name">pSHRA</StyledTokenName>
        <StyledValue datat-type="format">
          {FormatDigit(digit, { minimumFractionDigits: 0 })}
        </StyledValue>
      </StyledTokenDataContainer>
      <StyledTotalContainer>
        <StyledTotalPrice>
          Total ${FormatDigit(totalPrice, { minimumFractionDigits: 0 })}
        </StyledTotalPrice>
      </StyledTotalContainer>
      <StyledDataContainer>
        <StyledBadgeContainer className="badges">
          <InfoBadge
            title="REWARDS"
            token="pSHRA"
            value={totalPrice}
            minimumFractionDigits={0}
            buttonConfig={{
              textContent: 'Claim Reward',
              onClick: clickOnBadge,
              disabled: true,
            }}
          />
        </StyledBadgeContainer>
        <StyledBadgeContainer className="tabs">
          <MainPageTabs tabsData={TabData} />
        </StyledBadgeContainer>
      </StyledDataContainer>
      <StyledInfo>eth-01.saharanetwork.eth</StyledInfo>
    </StyledContainer>
  );
}
