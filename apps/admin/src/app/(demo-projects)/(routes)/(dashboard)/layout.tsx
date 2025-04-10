import React from "react";
import BaseDashboardLayout from "@/app/(base)/(routes)/(dashboard)/layout";
import DashboardHeader from "@/app/(demo-projects)/_shared/components/dashboard/header/Header";
import AppSidebar from "@/app/(demo-projects)/_shared/components/sidebar/AppSidebar";

export default async function DashboardLayout({
  children,
}: React.ComponentPropsWithoutRef<typeof BaseDashboardLayout>) {
  return (
    <BaseDashboardLayout
      HeaderComponent={<DashboardHeader />}
      SidebarComponent={
        <div className="relative inset-0 m-0 h-full w-full p-0">
          <AppSidebar className="absolute h-full border-r" />
        </div>
      }
    >
      {children}
    </BaseDashboardLayout>
  );
}
