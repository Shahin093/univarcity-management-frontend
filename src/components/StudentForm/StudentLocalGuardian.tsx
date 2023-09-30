import React from "react";
import FormsInput from "../Forms/FormsInput";
import { Col, Row } from "antd";

const StudentLocalGuardian = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        margin: "10px",
      }}
    >
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormsInput
            type="email"
            name="student.localGuardianName"
            size="large"
            label="Local Guardian Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormsInput
            type="text"
            name="student.localGuardianOccupation"
            size="large"
            label="Local Guardian Occupation"
          />
        </Col>

        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormsInput
            type="text"
            name="student.localGuardianContactNo"
            size="large"
            label="Local Guardian Contact No"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormsInput
            type="text"
            name="student.localGuardianAddress"
            size="large"
            label="Local Guardian Address"
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentLocalGuardian;
