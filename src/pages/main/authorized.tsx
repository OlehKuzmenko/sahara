import InfoBadge from '@/components/InfoBadge';
import MainPageTabs from '@/components/MainPageTabs';
import Table, { CustomColumn } from '@/components/Table';
import FormatDigitInTable from '@/components/Table/component/FormatDigit';
import SelectColumnFilter from '@/components/Table/component/SelectColumnFilter';
import StatusInTable from '@/components/Table/component/Status';
import WalletHashInTable from '@/components/Table/component/WalletHash';
import { ITransactionHistory } from '@/interfaces/ITransactionHistory';
import { LinksEnum } from '@/interfaces/LinksEnum';
import {
  getTransactionHistory,
  transactionHistoryDataState,
} from '@/redux/transaction';
import { currentDate } from '@/utils/consts';
import { FormatDigit, timeDifferenceInObject } from '@/utils/functions';
import { useAppDispatch, useAppSelector } from '@/utils/hooks';
import FirstTab from '@pages/main/TabsElement/FirstTab';
import SecondTab from '@pages/main/TabsElement/SecondTab';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  StyledBadgeContainer,
  StyledContainer,
  StyledDataContainer,
  StyledInfo,
  StyledTokenDataContainer,
  StyledTokenName,
  StyledTotalContainer,
  StyledTotalPrice,
  StyledValue,
} from './styled';

const column: CustomColumn[] = [
  {
    Header: 'TYPE',
    accessor: 'type',
    Filter: SelectColumnFilter,
    filter: 'includes',
  },
  {
    Header: 'DATE',
    accessor: 'date',
    disableFilters: true,
    Cell: (props) => {
      const date = new Date(props.value);
      const month = date.toLocaleString('en', { month: 'short' });
      const year = date.getFullYear();
      const day = date.getDate();

      return `${day} ${month} ${year}`;
    },
  },
  {
    Header: 'TIME PASSED',
    accessor: 'col3',
    disableFilters: true,
    Cell: (props) => {
      const data = props.row.original as ITransactionHistory;
      const firstDate = new Date(data.date);
      const timePassed = timeDifferenceInObject(currentDate, firstDate);
      if (timePassed.year > 0) {
        return `${timePassed.year} years ${
          timePassed.month ? `and ${timePassed.month} month` : ''
        } ago`;
      }
      if (timePassed.month > 0) {
        return `${timePassed.month} months  ${
          timePassed.day ? `and ${timePassed.day} day ` : ''
        } ago`;
      }
      if (timePassed.day > 0) {
        return `${timePassed.day} days ago`;
      }
      return '';
    },

    sortType: function (rowA, rowB) {
      const originalA = rowA.original as ITransactionHistory;
      const originalB = rowB.original as ITransactionHistory;
      const dateA = new Date(originalA.date);
      const dateB = new Date(originalB.date);

      if (dateA > dateB) return -1;

      if (dateB > dateA) return 1;

      return 0;
    },
  },
  {
    Header: 'AMOUNT',
    accessor: 'amount',
    disableFilters: true,
    Cell: (props) => {
      return String(FormatDigitInTable(+props.value));
    },
  },
  {
    Header: 'SUBSEQUENT DEPOSITS',
    accessor: 'deposit',
    disableFilters: true,
    Cell: (props) => String(FormatDigitInTable(+props.value)),
  },
  {
    Header: 'TXHASH',
    accessor: 'tHash',
    disableSortBy: true,
    disableFilters: true,
    Cell: (props) => {
      /* eslint-disable react/prop-types */
      return <WalletHashInTable hash={props.value} />;
    },
  },
  {
    Header: 'STATUS',
    accessor: 'status',
    Cell: (props) => <StatusInTable statusText={props.value} />,
    Filter: SelectColumnFilter,
    filter: 'includes',
  },
];

const TabData = [
  {
    tabName: 'DEPOSIT',
    tabData: <FirstTab />,
  },
  {
    tabName: 'WITHDRAW',
    tabData: <SecondTab />,
  },
];

export function TableComponent(): JSX.Element {
  const dispatch = useAppDispatch();
  const transactionHistoryData = useAppSelector(transactionHistoryDataState);
  // const transactionHistoryStatus = useAppSelector(
  //   transactionHistoryStatusState
  // );

  useEffect(() => {
    const promise = dispatch(getTransactionHistory());

    //If no data is received within 3 seconds, cancel the request.
    setTimeout(() => {
      promise.abort('Some Error ');
    }, 3000);
  }, []);

  // if (
  //   transactionHistoryStatus === 'idle' ||
  //   transactionHistoryStatus === 'loading'
  // )
  // return (
  //   <StyledTableContainer>
  //     <Loader />
  //   </StyledTableContainer>
  // );

  return (
    <Table
      tableTitle="History of transaction"
      data={transactionHistoryData}
      columns={column}
      pageSize={10}
    />
  );
}
export default function MainAuthorized(): JSX.Element {
  const history = useHistory();

  const digit = 12987.9388;
  const totalPrice = 302009.11;

  const clickOnBadge = function () {
    console.log('EVENT');
  };

  const clickOnClaim = function () {
    history.push(LinksEnum.VESTING);
  };

  return (
    <StyledContainer className="main-page">
      <StyledTokenDataContainer>
        <StyledTokenName data-type="name">pSHRA</StyledTokenName>
        <StyledValue datat-type="format">{FormatDigit(digit)}</StyledValue>
      </StyledTokenDataContainer>
      <StyledTotalContainer>
        <StyledTotalPrice>
          Total ${FormatDigit(totalPrice, { minimumFractionDigits: 2 })}
        </StyledTotalPrice>
      </StyledTotalContainer>
      <StyledDataContainer>
        <StyledBadgeContainer className="badges">
          <InfoBadge
            title="REWARDS"
            token="pSHRA"
            value={digit}
            buttonConfig={{
              textContent: 'Claim Reward',
              onClick: clickOnBadge,
            }}
          />
          <InfoBadge
            title="VESTING"
            token="SHRA"
            value={2000.0}
            buttonConfig={{
              textContent: 'Claim',
              onClick: clickOnClaim,
            }}
          />
        </StyledBadgeContainer>
        <StyledBadgeContainer className="tabs">
          <MainPageTabs tabsData={TabData} />
        </StyledBadgeContainer>
      </StyledDataContainer>
      <TableComponent />
      <StyledInfo>eth-01.saharanetwork.eth</StyledInfo>
    </StyledContainer>
  );
}
