"use client";
import Contents from "@/components/ui/Contents";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout, Alert, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isUserLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return (
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
    );
  }

  return (
    <Layout hasSider>
      <Sidebar />

      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
