import { Alert, Space, Spin } from "antd";

const Loading = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center", // Vertical centering
          alignItems: "center", // Horizontal centering
          height: "100vh",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Space direction="vertical">
            <Spin tip="" size="large">
              <div className="content" />
            </Spin>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Loading;
