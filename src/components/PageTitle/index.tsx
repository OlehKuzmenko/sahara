import React from 'react';
import { StyledText } from './styled';

interface IPageTitleProps
  extends React.ParamHTMLAttributes<HTMLParagraphElement> {
  text: string;
}

export default function PageTitle({
  text,
  ...props
}: IPageTitleProps): JSX.Element {
  return <StyledText {...props}>{text}</StyledText>;
}
