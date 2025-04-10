"use client";

import React from "react";
import Link from "next/link";
import MyLogo from "@/app/(base)/_shared/components/icons/MyLogo";

import { cn } from "@repo/ui/lib/utils";

const HeaderLogo = React.forwardRef<
  React.ElementRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & {}
>(({ href, className, children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      href={href}
      className={cn(
        "flex items-center justify-start gap-2 truncate font-semibold",
        className,
      )}
      {...props}
    >
      <MyLogo className="h-10 w-10" />
      <span className="truncate">My App</span>
      {children}
    </Link>
  );
});
HeaderLogo.displayName = "HeaderLogo";

export default HeaderLogo;
