"use client";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import From from "@/components/Forms/Forms";
import FormsInput from "@/components/Forms/FormsInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import {
  bloodGroup,
  departmentOptions,
  genderOptions,
} from "@/constants/global";
import { getUserInfo } from "@/services/auth.service";
import { Button, Col, Row } from "antd";

import React from "react";

const CreateFaculty = () => {
  const { role } = getUserInfo() as any;

  const adminOnSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <>
      <UMBreadCrumb
        items={[
          { label: `${role}`, link: `/${role}` },
          { label: `manage-faculty`, link: `/${role}` },
        ]}
      ></UMBreadCrumb>
      <h2>Create faculty</h2>
      <From submitHandler={adminOnSubmit}>
        {/* faculty information  */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: "500",
              margin: "5px 0px",
            }}
          >
            Faculty Information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col
              span={6}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormsInput
                name="faculty.name.firstName"
                label="First name"
                size="large"
              />
            </Col>

            <Col
              span={6}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormsInput
                name="faculty.name.middleName"
                label="Middle name"
                size="large"
              />
            </Col>

            <Col
              span={6}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormsInput
                name="faculty.name.lastName"
                label="Last name"
                size="large"
              />
            </Col>

            <Col
              span={6}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormsInput
                type="password"
                name="password"
                label="Password"
                size="large"
              />
            </Col>

            <Col
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormSelectField
                name="faculty.gender"
                label="Gender"
                options={genderOptions}
                size="large"
                placeholder="select"
              />
            </Col>

            <Col
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormSelectField
                name="faculty.academicFaculty"
                label="Academic Faculty"
                options={departmentOptions}
                size="large"
                placeholder="select"
              />
            </Col>
            <Col
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormSelectField
                name="faculty.academicDepartment"
                label="Academic Department"
                options={departmentOptions}
                size="large"
                placeholder="select"
              />
            </Col>

            <Col
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <UploadImage />
            </Col>
          </Row>
        </div>
        {/* basic information  */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Basic information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormsInput
                type="email"
                name="faculty.email"
                label="Email address"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormsInput
                name="faculty.contactNo"
                label="Contact no."
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormsInput
                name="faculty.emergencyContactNo"
                label="Emergency contact no."
                size="large"
              />
            </Col>

            <Col
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormDatePicker
                name="faculty.dateOfBirth"
                label="Date of birth"
              />
            </Col>

            <Col
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormSelectField
                name="faculty.bloodGroup"
                label="Blood group"
                options={bloodGroup}
                size="large"
                placeholder="select"
              />
            </Col>

            <Col
              span={8}
              style={{
                marginBottom: "10px",
              }}
            >
              <FormsInput
                name="faculty.designation"
                label="Designation"
                size="large"
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="faculty.presentAddress"
                label="Present address"
                rows={4}
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="faculty.permanentAddress"
                label="Permanent address"
                rows={4}
              />
            </Col>
          </Row>
        </div>
        <Button htmlType="submit">submit</Button>
      </From>
    </>
  );
};

export default CreateFaculty;
