import React from "react";
import Link from "next/link";
import { LucideArrowRight } from "lucide-react";

import { Badge } from "@repo/ui/components/badge";
import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";

function ToolCard({
  id,
  projectId,
  icon,
  title,
  description,
  status,
}: {
  id: string;
  projectId: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  status: string;
}) {
  return (
    <Card className="flex flex-col shadow-none transition-all hover:shadow-sm hover:shadow-primary-500">
      <CardHeader className="flex flex-row items-center space-x-4">
        <div className="rounded-full bg-primary/10 p-2 text-primary">
          {icon}
        </div>
        <div className="flex-1">
          <CardTitle className="text-xl">{title}</CardTitle>
          <Badge
            variant={
              status === "Active"
                ? "success"
                : status === "In Progress"
                  ? "warning"
                  : status === "Inactive"
                    ? "destructive"
                    : status === "Beta"
                      ? "magic"
                      : "secondary"
            }
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          type="button"
          variant="outline"
          className="w-full justify-between"
        >
          <Link href={`/projects/${projectId}/tools/${id}`}>
            Launch Tool
            <span className="sr-only">Launch {title}</span>
            <LucideArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ToolCard;
