import styled from 'styled-components';

export const StyledList = styled.div`
  width: 100%;
  max-height: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  margin: 15px 0;
  transition: all 1s ease-out;
  
  &.visible {
    max-height: 500px;
  }
`;

export const StyledListTitle = styled.h3`
  font-family: Montserrat, serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  margin-bottom: 15px;
`;

export const StyledListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const StyledListItemName = styled.p`
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
`;

export const StyledListItemValue = styled.p`
  font-family: Montserrat, serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #FFFFFF;
`;