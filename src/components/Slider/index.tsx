import {
  StyledAmount,
  StyledErrorContainer,
  StyledSlider,
} from '@components/Slider/styled';
import { SliderProps } from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from 'react';

interface ICustomSlider extends SliderProps {
  errorMessage?: string;
}

const wrapperStyle = {
  width: '100%',
  margin: '50px',
  gridArea: 'slider',
};

const CustomSlider = ({
  errorMessage,
  ...props
}: ICustomSlider): JSX.Element => {
  return (
    <div style={wrapperStyle}>
      <StyledAmount>Amount</StyledAmount>
      <StyledSlider {...props} />
      {errorMessage && (
        <StyledErrorContainer>{errorMessage}</StyledErrorContainer>
      )}
    </div>
  );
};

export default CustomSlider;
