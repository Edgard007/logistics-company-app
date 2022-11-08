import React from "react";

import styled from "styled-components";

import { Table } from "antd";

/**
 * Custom table component
 * @property {array} columns Table columns
 * @property {array} data Data to display
 * @property {object} scroll Scroll settings
 * @property {boolean} loading Flag to control action "loading".
 */
const CustomTable = ({
  columns = [],
  data = [],
  scroll = {},
  loading = false,
}) => {
  return (
    <Wrapper>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        scroll={scroll}
        pagination={
          data.length > 10
            ? {
                size: "small",
                showSizeChanger: false,
                responsive: true,
              }
            : false
        }
        rowKey={(record) => record?.id || ""}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .ant-table-thead > tr > th:first-child {
    border-top-left-radius: 10px !important;
  }

  .ant-table-thead > tr > th:last-child {
    border-top-right-radius: 10px !important;
  }

  .ant-table-thead > tr > th {
    padding: 4px !important;
  }

  .ant-table-thead .ant-table-cell {
    background: ${(props) => props?.theme?.secBlue} !important;
    color: ${(props) => props?.theme?.primary};
    font-weight: bold;
  }

  .ant-table-thead > tr > th::before {
    background-color: ${(props) => props?.theme?.primary} !important;
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
`;

export default CustomTable;
