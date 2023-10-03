"use client";
import { Table } from "antd";
import { boolean } from "yup";

type UMTableProps = {
  loading?: boolean;
  dataSource?: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onChange?: (pagination: any, filter: any, sorter: any) => void;
  columns?: any;
  showPagination?: boolean;
};

const UMTable = ({
  columns,
  dataSource,
  loading = false,
  onChange,
  onPaginationChange,
  pageSize,
  showSizeChanger = true,
  totalPages,
  showPagination = true,
}: UMTableProps) => {
  const paginationConfig = showPagination
    ? {
        pageSize: pageSize,
        total: totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onChange}
    />
  );
};

export default UMTable;
