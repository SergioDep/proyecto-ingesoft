import { getServerSession } from "@/app/(auth)/_shared/server/session";
import BaseDashboardHeader from "@/app/(base)/_shared/components/dashboard/header/Header";
import { ModeToggle } from "@/app/(base)/_shared/components/ui-extended/mode-toggle";
import DashboardHeaderUser from "@/app/(demo-projects)/_shared/components/dashboard/header/Avatar";

export default async function DashboardHeader() {
  const session = await getServerSession();
  const user = session?.user;

  return (
    <BaseDashboardHeader
      RightComponent={
        <div className="flex items-center justify-between gap-4">
          <ModeToggle />
          <DashboardHeaderUser user={user} />
        </div>
      }
    ></BaseDashboardHeader>
  );
}
