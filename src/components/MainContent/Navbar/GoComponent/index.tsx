import { MyReactSelectOptionType, OnChange } from '@/components/Dropdown';
import { NetworkType } from '@/interfaces/IUser';
import { authNetworkType, setNetworkType } from '@/redux/auth';
import { ArrayElement } from '@/types/ArrayElement.type';
import { capitalizeFirstLetter } from '@/utils/functions';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import React from 'react';
import {
  components,
  GroupBase,
  OptionProps,
  ValueContainerProps,
} from 'react-select';
import {
  IconContainer,
  StyledContainer,
  StyledEthIcon,
  StyledSelect,
} from './styled';

type Option = NetworkType;

const options: MyReactSelectOptionType<Option>[] = [
  {
    value: NetworkType.ETHEREUM,
    label: capitalizeFirstLetter(NetworkType.ETHEREUM) as NetworkType,
    icon: StyledEthIcon as string,
  },
  {
    value: NetworkType.TRON,
    label: capitalizeFirstLetter(NetworkType.TRON) as NetworkType,
  },
];

type OptionsElement = ArrayElement<MyReactSelectOptionType<Option>[]>;

function CustomOption(
  props: OptionProps<
    MyReactSelectOptionType,
    boolean,
    GroupBase<MyReactSelectOptionType>
  >
) {
  return (
    <components.Option {...props}>
      {props.data.icon && <props.data.icon />}
      {props.data.label}
    </components.Option>
  );
}

const ValueContainer = ({
  children,
  ...props
}: ValueContainerProps<
  MyReactSelectOptionType,
  boolean,
  GroupBase<MyReactSelectOptionType>
>) => {
  const [currentValue] = props.getValue() as OptionsElement[];
  return (
    components.ValueContainer && (
      <components.ValueContainer {...props}>
        {!!children && currentValue.icon && (
          <IconContainer>
            {currentValue.icon && <currentValue.icon />}
          </IconContainer>
        )}
        {children}
      </components.ValueContainer>
    )
  );
};

const selectCurrentValueFromOptions = function (
  type: NetworkType
): MyReactSelectOptionType {
  return options.find(({ value }) => value === type) as MyReactSelectOptionType;
};

export default function GoComponent(): JSX.Element {
  const dispatch = useAppDispatch();
  const networkType = useAppSelector(authNetworkType);

  const generalOnChange: OnChange<MyReactSelectOptionType> = (option) => {
    if (option) {
      dispatch(setNetworkType(option.value as NetworkType));
    }
  };

  return (
    <StyledContainer>
      <StyledSelect
        options={options}
        onChange={generalOnChange as OnChange<unknown>}
        defaultValue={selectCurrentValueFromOptions(networkType)}
        isSearchable={false}
        components={{
          Option: CustomOption as typeof components.Option,
          ValueContainer: ValueContainer as typeof components.ValueContainer,
        }}
      />
    </StyledContainer>
  );
}
