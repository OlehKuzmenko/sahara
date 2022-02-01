import { OnChange } from '@/components/Dropdown';
import { PREFIX } from '@/components/Dropdown/styled';
import React, { useMemo } from 'react';
import {
  components,
  GroupBase,
  OptionProps,
  Options,
  ValueContainerProps,
} from 'react-select';
import { Column, UseFiltersColumnProps } from 'react-table';
import { StyledFilterIcon, StyledSelect, StyledSelectIcon } from './styled';

function CustomOption(props: OptionProps<Option, boolean, GroupBase<Option>>) {
  return (
    <components.Option {...props}>
      <span>{props.data.label}</span>
      {props.isSelected && <StyledSelectIcon />}
    </components.Option>
  );
}

function ValueContainer({
  children,
  ...props
}: ValueContainerProps<Option, boolean, GroupBase<Option>>) {
  return (
    <components.ValueContainer {...props}>
      <StyledFilterIcon />
      {children}
    </components.ValueContainer>
  );
}

type Option = { value: string; label: string };

export default function SelectColumnFilter<T extends Record<string, unknown>>({
  column: { setFilter, preFilteredRows, id, Header },
}: {
  column: UseFiltersColumnProps<T> & Column;
}): JSX.Element {
  if (!id) return <></>;
  const options: Options<Option> = useMemo(() => {
    const options: Set<string> = new Set();
    preFilteredRows.forEach((row) => {
      options.add(row.values[id]);
    });
    const convertedOption = [...options.values()].map((element) => ({
      value: element,
      label: element,
    }));
    return [{ value: '', label: 'All' }, ...convertedOption];
  }, [id, preFilteredRows]);

  return (
    <StyledSelect
      options={options}
      className={`${PREFIX}-filter`}
      classNamePrefix={PREFIX}
      placeholder={`FILTER ${Header}`}
      isSearchable={false}
      components={{
        Option: CustomOption as typeof components.Option,
        ValueContainer: ValueContainer as typeof components.ValueContainer,
      }}
      onChange={
        ((selectedOption) => {
          setFilter((selectedOption as Option).value);
        }) as OnChange<unknown>
      }
    />
  );
}
