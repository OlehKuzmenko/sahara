import React, { useMemo } from 'react';
import { useImmer } from 'use-immer';
import {
  StyledArrow,
  StyledMainPageTabs,
  StyledTabContentElement,
  StyledTabElement,
  StyledTabsContainer,
  StyledTabsContent,
} from './styled';

interface PropsData {
  tabName: string;
  tabData: React.ReactNode;
}
interface IActiveTabState extends PropsData {
  tabActive: boolean;
}

interface IActiveTabProps extends React.ParamHTMLAttributes<HTMLDivElement> {
  tabsData: PropsData[];
}

export default function MainPageTabs({
  tabsData,
}: IActiveTabProps): JSX.Element {
  const memorizedInitialTab = useMemo<IActiveTabState[]>(() => {
    return tabsData.map((tab) => {
      return {
        ...tab,
        tabActive: false,
      } as IActiveTabState;
    });
  }, []);

  const [activeTabs, setActiveTab] = useImmer<IActiveTabState[]>(() => {
    const newArray = [...memorizedInitialTab];
    newArray.splice(0, 1, {
      ...memorizedInitialTab[0],
      tabActive: true,
    });
    return newArray;
  });

  const clickOnTab = function (event: React.MouseEvent<HTMLElement>) {
    const target = event.target as HTMLButtonElement;
    const clickedIndex = +(target.getAttribute('data-index') ?? 0);
    setActiveTab((draft) => {
      const prevIndex = Object.values(draft).findIndex(
        (element) => element.tabActive
      );
      (draft[prevIndex].tabActive = false);
        (draft[clickedIndex].tabActive = true);
    });
  };

  return (
    <StyledMainPageTabs className="tabs-container">
      <StyledTabsContainer className="tabs">
        {activeTabs.map((tab, index) => {
          return (
            <StyledTabElement
              className={activeTabs[index].tabActive ? 'active' : ''}
              key={index}
              onClick={clickOnTab}
            >
              <span data-index={index}>
                {tab.tabName}
                <StyledArrow />
              </span>
            </StyledTabElement>
          );
        })}
      </StyledTabsContainer>
      <StyledTabsContent className="tabs-content">
        {activeTabs.map((tab, index) => {
          return (
            <StyledTabContentElement
              className={`tabs-panel ${
                activeTabs[index].tabActive ? 'active' : ''
              }`}
              data-index={index}
              key={index}
            >
              {tab.tabData}
            </StyledTabContentElement>
          );
        })}
      </StyledTabsContent>
    </StyledMainPageTabs>
  );
}
