import { Col, Row } from "antd";
import FormsInput from "../Forms/FormsInput";

const StudentGuardianInfo = () => {
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
            type="text"
            name="student.fatherName"
            size="large"
            label="Father Name"
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
            name="student.fatherOccupation"
            size="large"
            label="Father Occupation"
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
            name="student.fatherContactNo"
            size="large"
            label="Father Contact No"
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
            name="student.motherName"
            size="large"
            label="Mother Name"
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
            name="student.motherOccupation"
            size="large"
            label="Mother Occupation"
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
            name="student.motherContactNo"
            size="large"
            label="Mother Contact No"
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
            name="student.address"
            size="large"
            label="Address"
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentGuardianInfo;
