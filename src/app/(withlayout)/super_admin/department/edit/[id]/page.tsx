"use client";
import From from "@/components/Forms/Forms";
import FormsInput from "@/components/Forms/FormsInput";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import {
  useSingleDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";
import React from "react";

type IDProps = {
  params: string;
};

const EditDepartmentPage = ({ params }: IDProps) => {
  const { id } = params;

  const { data, isLoading } = useSingleDepartmentQuery(id);

  const [updateDepartment] = useUpdateDepartmentMutation();

  const onSubmit = async (values: { title: string }) => {
    message.loading("Updating .....");
    try {
      await updateDepartment({ id, body: values });
      message.success("Department Updated successfully");
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const defaultValue = {
    title: data?.title || "",
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`,
          },
          {
            label: `department`,
            link: `/super_admin/department`,
          },
        ]}
      ></UMBreadCrumb>
      <h1>Updating Id {id} </h1>
      <ActionBar title="Update Department"></ActionBar>
      <From submitHandler={onSubmit} defaultValues={defaultValue}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormsInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </From>
    </div>
  );
};

export default EditDepartmentPage;
