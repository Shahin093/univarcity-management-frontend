"use client";

import From from "@/components/Forms/Forms";
import FormsInput from "@/components/Forms/FormsInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row, message } from "antd";

const CreateDepartmentPage = () => {
  const [addDepartment] = useAddDepartmentMutation();
  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      console.log(data);
      await addDepartment(data);
      message.success("Department added successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          { label: `${role}`, link: `/${role}` },
          { label: "department", link: `/${role}/department` },
        ]}
      />
      <h1>Create Department</h1>
      <From submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormsInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </From>
    </div>
  );
};

export default CreateDepartmentPage;
