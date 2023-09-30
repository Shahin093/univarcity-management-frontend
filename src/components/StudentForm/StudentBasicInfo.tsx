import { Col, Row } from "antd";
import FormSelectField from "../Forms/FormSelectField";
import FormsInput from "../Forms/FormsInput";
import FormTextArea from "../Forms/FormTextArea";
import { bloodGroup } from "@/constants/global";
import FormDatePicker from "../Forms/FormDatePicker";

const StudentBasicInfo = () => {
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
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormsInput
            type="email"
            name="student.email"
            size="large"
            label="Email"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormsInput
            type="text"
            name="student.contactNo"
            size="large"
            label="Contact Number"
          />
        </Col>

        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormsInput
            type="text"
            name="student.emergencyContactNo"
            size="large"
            label="Emergency Contact Number"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormDatePicker
            name="student.dateOfBirth"
            size="large"
            label="Date Of Birth"
          />
        </Col>

        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormSelectField
            size="large"
            name="student.bloodGroup"
            options={bloodGroup}
            label="bloodGroup"
            placeholder="Select"
          />
        </Col>

        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormTextArea
            name="student.permanentAddress"
            rows={4}
            label="Permanent Address"
          />
        </Col>
        <Col
          className="gutter-row"
          span={12}
          style={{
            marginBottom: "10px",
          }}
        >
          <FormTextArea
            name="student.presentAddress"
            rows={4}
            label="present Address"
          />
        </Col>
      </Row>
    </div>
  );
};

export default StudentBasicInfo;
