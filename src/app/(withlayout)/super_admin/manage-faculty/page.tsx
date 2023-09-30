"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageFacultiesPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `${role || "super_admin"}`,
            link: `/${role || "super_admin"}`,
          },
        ]}
      ></UMBreadCrumb>
      <h1>Manage Faculty</h1>
      <Link href="/super_admin/manage-faculty/create">
        <Button>Create Faculty</Button>
      </Link>
    </div>
  );
};

export default ManageFacultiesPage;
