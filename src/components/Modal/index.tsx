import React from 'react';
import useOnClickOutside from 'use-onclickoutside';
import {
  StyledModalContainer,
  StyledModalWrapper,
  StyledOverlay,
  StyledReactModal,
  StyledCross,
} from './styled';

interface IModalProps extends React.ParamHTMLAttributes<HTMLDivElement> {
  closePortal: () => void;
  children: React.ReactNode;
}

const Modal = ({
  children,
  closePortal,
  ...props
}: IModalProps): JSX.Element => {
  const ref = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, closePortal as () => void);

  return (
    <StyledReactModal {...props}>
      <StyledOverlay />
      <StyledModalContainer ref={ref}>
        <StyledCross onClick={closePortal} />
        <StyledModalWrapper>{children}</StyledModalWrapper>
      </StyledModalContainer>
    </StyledReactModal>
  );
};

export default Modal;
