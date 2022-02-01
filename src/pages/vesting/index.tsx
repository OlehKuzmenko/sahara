import Loader from '@/components/Loader';
import ClaimInTable from '@/components/Table/component/Claim';
import FormatDigitInTable from '@/components/Table/component/FormatDigit';
import {
  getVestingData,
  vestingDataState,
  vestingStatusState,
} from '@/redux/vesting';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import Table, { CustomColumn } from '@components/Table';
import React, { useEffect } from 'react';
import { StyledSection } from './styled';

const column: CustomColumn[] = [
  {
    Header: 'ROUND',
    accessor: 'round',
    disableFilters: true,
  },
  {
    Header: 'TOKEN',
    accessor: 'token',
    disableFilters: true,
  },
  {
    Header: 'CLIFF PERIOD',
    accessor: 'cliffPeriod',
    Cell: ({ value }) => {
      const dateObject = new Date(value);
      const month = dateObject.toLocaleString('en', { month: 'short' });
      const year = dateObject.getFullYear();
      const day = dateObject.getDate();
      return `${day} ${month} ${year}`;
    },
    disableFilters: true,
  },
  {
    Header: 'UNLOCKED AND UNCLAIMED TOKENS',
    accessor: 'unlockedToken',
    Cell: (props) => String(FormatDigitInTable(+props.value)),
    disableFilters: true,
  },
  {
    Header: 'TOTAL TOKENS',
    accessor: 'totalToken',
    Cell: (props) => String(FormatDigitInTable(+props.value)),
    disableFilters: true,
  },
  {
    Header: 'ACTION',
    accessor: 'col6',
    Cell: (props) => <ClaimInTable text="Claim" {...props} />,
    disableSortBy: true,
    disableFilters: true,
  },
];

export default function Vesting(): JSX.Element {
  const dispatch = useAppDispatch();
  const vestingData = useAppSelector(vestingDataState);
  const vestingStatus = useAppSelector(vestingStatusState);

  useEffect(() => {
    const promise = dispatch(getVestingData());

    //If no data is received within 3 seconds, cancel the request.
    setTimeout(() => {
      promise.abort('Some Error ');
    }, 3000);
  }, []);

  if (vestingStatus === 'idle' || vestingStatus === 'loading')
    return <Loader />;

  return (
    <StyledSection>
      <Table data={vestingData} columns={column} pageSize={10} />
    </StyledSection>
  );
}
