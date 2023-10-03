"use client";
import { Table } from "antd";

const UMTable = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
  ];

  const tableData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
    },
  ];

  const onPageSizeChange = (page: number, pageSize: number) => {
    console.log("page: ", page, "pagesize: ", pageSize);
  };

  return (
    <Table
      loading={false}
      columns={columns}
      dataSource={tableData}
      pagination={{
        pageSize: 5,
        total: 100,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: true,
        onChange: onPageSizeChange,
      }}
    />
  );
};

export default UMTable;
