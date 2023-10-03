"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import UMTable from "@/components/ui/UMTable";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const DepartmentPage = () => {
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
      <h1>Department List</h1>
      <Link href="/super_admin/department/create">
        <Button>Create Department</Button>
      </Link>

      <UMTable />
    </div>
  );
};

export default DepartmentPage;
