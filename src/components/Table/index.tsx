import {
  StyledFilterContainer,
  StyledHeadContainer,
  StyledPaggination,
  StyledPagginationButton,
  StyledPagginationCurrentPage,
  StyledPagginationNumbers,
  StyledPagginationPagesNumber,
  StyledSortingIcon,
  StyledTable,
  StyledTableBody,
  StyledTableHead,
  StyledTableTd,
  StyledTableTh,
  StyledTableTr,
} from '@components/Table/styled';
import { ReactComponent as ArrowBtn } from '@icons/paggination_arrow.svg';
import { ReactComponent as SortingDown } from '@icons/sorting_down.svg';
import { ReactComponent as SortingUp } from '@icons/sorting_up.svg';
import React from 'react';
import {
  Column,
  useFilters,
  UseFiltersColumnProps,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';

export type CustomColumn = Column;

interface ITableProps extends React.ParamHTMLAttributes<HTMLDivElement> {
  tableTitle?: string;
  pageSize: number;
  columns: CustomColumn[];
  /* eslint-disable @typescript-eslint/no-explicit-any*/
  data: Array<any>;
}

// Define a default UI for filtering
function DefaultColumnFilter({
                               column: { filterValue, preFilteredRows, setFilter },
                             }: {
  column: UseFiltersColumnProps<CustomColumn> & Column;
}) {
  const count = preFilteredRows.length;

  return (
    <input
      value={filterValue || ''}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  );
}

export default function Table({
                                tableTitle,
                                pageSize,
                                columns,
                                data,
                                ...props
                              }: ITableProps): JSX.Element {
  const defaultColumn: Record<string, unknown> = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      // defaultCanFilter: false,
      initialState: { pageSize: pageSize, pageIndex: 0 },
    },
    useFilters,
    useSortBy,
    usePagination,
  );

  return (
    <section {...props}>
      <StyledHeadContainer>
        {tableTitle && <h3>{tableTitle}</h3>}
        <StyledFilterContainer>
          {headerGroups.map((headerGroup) => {
            return headerGroup.headers.map((column) => {
              return column.canFilter ? (
                <div className='filter-element-container'>
                  {column.render('Filter')}
                </div>
              ) : null;
            });
          })}
        </StyledFilterContainer>
      </StyledHeadContainer>

      <StyledTable {...getTableProps()}>
        <StyledTableHead>
          {headerGroups.map((headerGroup) => (
            <StyledTableTr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.getHeaderGroupProps().key}
            >
              {headerGroup.headers.map((column) => {
                return (
                  <StyledTableTh
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={column.getHeaderProps().key}
                  >
                    {column.render('Header')}
                    <StyledSortingIcon>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <SortingDown />
                        ) : (
                          <SortingUp />
                        )
                      ) : (
                        ''
                      )}
                    </StyledSortingIcon>
                  </StyledTableTh>
                );
              })}
            </StyledTableTr>
          ))}
        </StyledTableHead>
        <StyledTableBody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <StyledTableTr {...row.getRowProps()} key={row.getRowProps().key}>
                {row.cells.map((cell, index) => {
                  return (
                    <StyledTableTd key={index}>
                      {cell.render('Cell')}
                    </StyledTableTd>
                  );
                })}
              </StyledTableTr>
            );
          })}
        </StyledTableBody>
      </StyledTable>
      <StyledPaggination className='pagination'>
        <StyledPagginationButton
          className='left'
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <ArrowBtn />
        </StyledPagginationButton>
        <StyledPagginationNumbers>
          <StyledPagginationCurrentPage>
            {pageIndex + 1}
          </StyledPagginationCurrentPage>
          /
          <StyledPagginationPagesNumber>
            {pageOptions.length}
          </StyledPagginationPagesNumber>
        </StyledPagginationNumbers>
        <StyledPagginationButton
          className='right'
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <ArrowBtn />
        </StyledPagginationButton>
      </StyledPaggination>
    </section>
  );
}
