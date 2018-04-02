import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import styled from 'styled-components';

import Pagination from './Pagination';
import LoadingIndicator from './LoadingIndicator';

const NoLoadingIndicator = () => (<div></div>);

const MyTable = ({ className, pages, currentPage, onPagination, noDataText, loading, totalResults, onChangePageSize, ...props }) => (
  <div className={className}>
    <ReactTable
      manual
      showPagination={false}
      multiSort
      pages={pages}
      className="-striped -highlight react-table"
      loading={loading === true}
      loadingText=""
      LoadingComponent={loading === true ? LoadingIndicator : NoLoadingIndicator}
      noDataText={noDataText}
      {...props}
    />
    {onPagination &&
    <Pagination
      totalPages={pages}
      totalResults={totalResults}
      currentPage={currentPage}
      onPageChanged={onPagination}
      onChangePageSize={onChangePageSize}
    />}
  </div>
);

MyTable.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.number,
  currentPage: PropTypes.number,
  onPagination: PropTypes.func,
  noDataText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  loading: PropTypes.bool,
  totalResults: PropTypes.number,
  onChangePageSize: PropTypes.func,
};

export default styled(MyTable)`
        .react-table {
            border-radius: 4px;
            border: 1px solid #ccc;
        } 
        .hide {
            display: none
        }
`;
