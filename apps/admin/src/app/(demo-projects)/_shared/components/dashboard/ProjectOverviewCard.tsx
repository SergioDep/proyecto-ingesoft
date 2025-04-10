import Link from "next/link";

import { Badge } from "@repo/ui/components/badge";
import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";

export function ProjectOverviewCard({
  id,
  title,
  description,
  status,
}: {
  id: string;
  title: string;
  description: string;
  status: string;
}) {
  return (
    <Card className="flex h-full flex-col justify-between">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          <Badge
            variant={
              status === "Active"
                ? "success"
                : status === "In Progress"
                  ? "warning"
                  : status === "Inactive"
                    ? "destructive"
                    : "secondary"
            }
          >
            {status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="h-full">
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          type="button"
          variant="ghost"
          className="w-full justify-start text-primary-600 hover:bg-primary-50 hover:text-primary-800"
        >
          <Link href={`/projects/${id}`}>View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
