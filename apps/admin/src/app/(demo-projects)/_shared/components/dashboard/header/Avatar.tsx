import { headers } from "next/headers";
import Image from "next/image";
import { auth } from "@/app/(auth)/_shared/server/auth";
import { User } from "better-auth";
import { LucideHelpCircle, LucideLogOut, LucideUserCircle } from "lucide-react";

import { Button } from "@repo/ui/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@repo/ui/components/dropdown-menu";

export default function DashboardHeaderUser({ user }: { user?: User }) {
  async function handleLogout() {
    "use server";
    await auth.api.signOut({
      headers: await headers(),
    });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="h-10 w-10 flex-none rounded-full p-0"
        >
          {user?.image ? (
            <Image
              src={user?.image}
              className="aspect-square select-none rounded-full bg-background object-cover"
              alt="User profile"
              width={40}
              height={40}
            />
          ) : (
            <LucideUserCircle className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex max-h-80 w-80 flex-col bg-background p-2"
      >
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="p-0">
            <Button
              type="button"
              variant="ghost"
              className="flex h-full w-full cursor-pointer items-center justify-start gap-2 px-2 text-left focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              <LucideHelpCircle className="h-4 w-4" />
              Support
            </Button>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="p-0">
            <form action={handleLogout}>
              <Button
                variant="ghost"
                className="flex h-full w-full cursor-pointer items-center justify-start gap-2 px-2 text-left text-destructive"
              >
                <LucideLogOut className="h-4 w-4" />
                Sign out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
