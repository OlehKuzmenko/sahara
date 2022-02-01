import React from 'react';
import {
  StyledList,
  StyledListItem,
  StyledListItemName,
  StyledListItemValue,
  StyledListTitle,
} from '@components/List/styled';

type List = {
  [x: string]: string;
};

interface IListProps extends React.ParamHTMLAttributes<HTMLDivElement> {
  list: List;
  title?: string;
  validated?: boolean;
}

const List = ({
  list,
  title,
  validated,
  ...props
}: IListProps): JSX.Element => {
  return (
    <StyledList className={validated ? 'visible' : ''} {...props}>
      {title ? <StyledListTitle>{title}</StyledListTitle> : null}
      {Object.keys(list).map((key, index) => (
        <StyledListItem key={index}>
          <StyledListItemName>{key}</StyledListItemName>
          <StyledListItemValue>{list[key]}</StyledListItemValue>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default List;
