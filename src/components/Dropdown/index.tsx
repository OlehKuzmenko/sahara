import React, { useState } from 'react';
import { SingleValue, ActionMeta, Props, Options } from 'react-select';
import { PREFIX, StyledSelect, StyledSelectTitle } from './styled';

type Option = string | number;

export type MyReactSelectOptionType<T = Option> = {
  label: T;
  value: T;
  icon?: string;
};

export type OnChange<T> = (
  value: SingleValue<T>,
  actionMeta: ActionMeta<T>,
  ...rest: unknown[]
) => void;

type IDropdownProps = Props & {
  options: Options<MyReactSelectOptionType>;
  className?: string;
  onChange?: OnChange<MyReactSelectOptionType>;
  title?: string;
  defaultValue?: MyReactSelectOptionType;
};

export default function CustomSelect({
  options,
  onChange,
  className,
  defaultValue,
  title,
  ...props
}: IDropdownProps): JSX.Element {
  const [selectedOption, setSelectedOption] = useState<MyReactSelectOptionType>(
    defaultValue ?? options[0]
  );
  const generalOnChange: OnChange<MyReactSelectOptionType> = (
    option,
    actionMeta
  ) => {
    if (option) {
      setSelectedOption(option);
      if (onChange) {
        onChange(option, actionMeta);
      }
    }
  };
  return (
    <>
      {title ? <StyledSelectTitle>{title}</StyledSelectTitle> : null}
      <StyledSelect
        className={`${PREFIX}-container ${className}`}
        classNamePrefix={PREFIX}
        defaultValue={selectedOption}
        options={options}
        onChange={generalOnChange as OnChange<unknown>}
        {...props}
      />
    </>
  );
}
