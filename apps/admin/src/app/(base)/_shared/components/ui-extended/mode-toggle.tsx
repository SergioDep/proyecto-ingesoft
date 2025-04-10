"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button, ButtonProps } from "@repo/ui/components/button";

interface ModeToggleProps extends ButtonProps {}

export function ModeToggle({
  className,
  variant = "outline",
  ...props
}: ModeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      type="button"
      variant={variant}
      className={className}
      size="icon"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
      {...props}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
