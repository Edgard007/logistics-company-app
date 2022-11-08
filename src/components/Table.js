import React from "react";

import styled from "styled-components";

import { Table } from "antd";

const CustomTable = ({
  columns = [],
  data = [],
  scroll = {},
  pagination,
  rowSelection,
  expandable,
}) => {
  return (
    <Wrapper>
      <Table
        columns={columns}
        dataSource={data}
        scroll={scroll}
        rowSelection={rowSelection || false}
        expandable={expandable || false}
        pagination={
          pagination
            ? {
                ...pagination,
                size: "small",
                showSizeChanger: false,
                responsive: true,
              }
            : data.length > 10
            ? {
                size: "small",
                showSizeChanger: false,
                responsive: true,
              }
            : false
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* ANTD Table */
  .ant-table-thead > tr > th:first-child {
    border-top-left-radius: 10px !important;
  }

  .ant-table-thead > tr > th:last-child {
    border-top-right-radius: 10px !important;
  }

  .ant-table-column-sorters {
    flex-direction: row-reverse !important;
  }

  .ant-table-column-sorter-up,
  .ant-table-column-sorter-down {
    font-size: 20px !important;
  }

  .ant-table-column-sorter-up.active,
  .ant-table-column-sorter-down.active {
    color: ${(props) => props?.theme?.primary} !important;
    font-weight: bold !important;
  }

  .ant-table-thead > tr > th {
    padding: 4px !important;
  }

  .ant-table-thead .ant-table-cell {
    background: ${(props) => props?.theme?.secBlue} !important;
    color: ${(props) => props?.theme?.primary};
    font-weight: bold;
  }

  .ant-table-thead th.ant-table-column-sort {
    background: ${(props) => props?.theme?.blue} !important;
  }

  .ant-table-thead > tr > th::before {
    background-color: transparent !important; /** Ocultar línea de separación */
  }

  .ant-table-thead > tr > th:last-child {
    border-bottom-right-radius: 10px !important;
  }

  .ant-table-thead > tr > th:first-child {
    border-bottom-left-radius: 10px !important;
  }

  .ant-table-tbody {
    color: ${(props) => props?.theme?.blue} !important;
    background-color: ${(props) => props?.theme?.secundary} !important;
    border-radius: 10px !important;
  }

  .ant-table-body > tr > td:last-child {
    border-bottom-right-radius: 10px !important;
  }

  .ant-table-tbody > tr.ant-table-row-selected > td {
    background: ${(props) => props?.theme?.secundary} !important;
  }

  .ant-table-content {
    border-bottom-right-radius: 10px !important;
    border-bottom-left-radius: 10px !important;
  }

  .ant-table-pagination {
    /* Centrar la paginación */
    display: flex !important;
    justify-content: center !important;
  }

  .ant-pagination-item-active {
    background: ${(props) => props?.theme?.secGray} !important;

    margin: 0px !important;
  }

  .ant-pagination-item-link {
    margin: 0px !important;
  }

  .ant-pagination-item:not(.ant-pagination-item-active),
  .ant-pagination-prev,
  .ant-pagination-next,
  .custom-item-paginator {
    background: ${(props) => props?.theme?.gray} !important;
    color: ${(props) => props?.theme?.blue} !important;
    margin: 0px !important;
  }
  .ant-pagination.mini > li,
  .custom-item-paginator {
    border: 1px solid ${(props) => props?.theme?.gray} !important;
  }

  .ant-table-row-expand-icon {
    padding: 10px 10px !important;
    margin-right: 20px !important;
  }

  .ant-table-row-expand-icon::after {
    left: 9px !important;
  }

  .ant-table-row-expand-icon::before {
    top: 9px !important;
  }

  .ant-table-selection-column {
    width: 100px !important;
  }
`;

export default CustomTable;
