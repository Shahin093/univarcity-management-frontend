"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const AdminPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      ></UMBreadCrumb>

      <ActionBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button>Create admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default AdminPage;
