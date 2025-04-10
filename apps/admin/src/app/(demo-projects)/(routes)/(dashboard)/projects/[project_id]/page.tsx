import ToolCard from "@/app/(demo-projects)/_shared/components/dashboard/ToolCard";
import { projects } from "@/app/(demo-projects)/_shared/lib/config/projects";

import { Badge } from "@repo/ui/components/badge";
import { Card, CardHeader, CardTitle } from "@repo/ui/components/card";

export const runtime = "edge";

export default async function Page(props: {
  params: Promise<{ project_id: string }>;
}) {
  const params = await props.params;

  const project = projects.find((p) => p.id === params.project_id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="relative flex h-full flex-1 flex-col gap-4 overflow-y-auto p-4 lg:gap-6 lg:p-6">
      <div className="container mx-auto space-y-8 p-4">
        <Card className="w-full">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-2xl font-bold">
                {project.name}
              </CardTitle>
              <p className="mt-1 text-muted-foreground">
                {project.description}
              </p>
            </div>
            <Badge
              variant={
                project.status === "Active"
                  ? "success"
                  : project.status === "In Progress"
                    ? "warning"
                    : project.status === "Inactive"
                      ? "destructive"
                      : "secondary"
              }
            >
              {project.status}
            </Badge>
          </CardHeader>
        </Card>

        <section>
          <h2 className="mb-4 text-xl font-semibold">Tools</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {project.tools.map((tool) => (
              <ToolCard
                key={tool.id}
                id={tool.id}
                projectId={project.id}
                icon={tool.icon}
                status={tool.status}
                title={tool.name}
                description={tool.description}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
