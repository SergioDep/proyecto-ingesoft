// Only import types, so no circular dependency issue
import {
  type BaseSidebarItem,
  type SidebarDefinitionsTag,
} from "@/app/(base)/_shared/lib/types/sidebar-utils";
import {
  LucideBookOpenText,
  LucideChartNoAxesCombined,
  LucideCloudUpload,
  LucideFolder,
  LucideHome,
  LucideUserCog2,
} from "lucide-react";

export const sidebarConfig = {
  default: {
    id: "default",
    items: [
      {
        id: "home",
        content: {
          render: () => (
            <div className="flex w-full items-center justify-between rounded-md px-4 py-2">
              <div className="flex items-center gap-3">
                <LucideHome className="h-5 w-5" />
                <span className="font-semibold tracking-wide">Home</span>
              </div>
            </div>
          ),
          redirect: "/",
        },
      },
    ],
  },
  projects: {
    id: "projects",
    items: [
      {
        id: "projects",
        content: {
          render: () => (
            <div className="flex w-full items-center justify-between rounded-md px-4 py-2">
              <div className="flex items-center gap-3">
                <LucideFolder className="h-5 w-5" />
                <span className="font-semibold tracking-wide">Projects</span>
              </div>
            </div>
          ),
        },
        items: [
          {
            id: "tools",
            content: {
              render: () => (
                <div className="flex w-full items-center justify-between rounded-md px-4 py-2">
                  <div className="flex items-center gap-3">
                    <LucideFolder className="h-5 w-5" />
                    <span className="font-semibold tracking-wide">Tools</span>
                  </div>
                </div>
              ),
              redirect: "/projects/tools",
            },
          },
        ],
      },
    ],
  },
  crm: {
    id: "crm",
    items: [
      {
        id: "crm",
        content: {
          render: () => (
            <div className="flex w-full items-center justify-between rounded-md px-4 py-2">
              <div className="flex items-center gap-3">
                <LucideBookOpenText className="h-5 w-5" />
                <span className="font-semibold tracking-wide">CRM</span>
              </div>
            </div>
          ),
        },
        items: [
          {
            id: "contacts",
            content: {
              render: () => (
                <div className="flex w-full items-center justify-between rounded-md px-4 py-2">
                  <div className="flex items-center gap-3">
                    <LucideUserCog2 className="h-5 w-5" />
                    <span className="font-semibold tracking-wide">
                      Contacts
                    </span>
                  </div>
                </div>
              ),
              redirect: "/crm/contacts",
            },
          },
          {
            id: "sync-data",
            content: {
              render: () => (
                <div className="flex w-full items-center justify-between rounded-md px-4 py-2">
                  <div className="flex items-center gap-3">
                    <LucideCloudUpload className="h-5 w-5" />
                    <span className="font-semibold tracking-wide">
                      Sync Data
                    </span>
                  </div>
                </div>
              ),
              redirect: "/crm/sync-data",
            },
          },
        ],
      },
    ],
  },
  analytics: {
    id: "analytics",
    items: [
      {
        id: "analytics",
        content: {
          render: () => (
            <div className="flex w-full items-center justify-between rounded-md px-4 py-2">
              <div className="flex items-center gap-3">
                <LucideChartNoAxesCombined className="h-5 w-5" />
                <span className="font-semibold tracking-wide">Analytics</span>
              </div>
            </div>
          ),
          redirect: "/analytics",
        },
      },
    ],
  },
} as const satisfies Record<string, BaseSidebarItem>;

export const sidebarRouteConfig = {
  "/": {
    pattern: /^\//,
    tags: ["default", "projects", "analytics", "crm"],
  },
  "/settings": {
    pattern: /^\/settings/,
    tags: ["default"],
  },
  // Add more route configurations here
} as const satisfies {
  [Route in `/${string}`]: {
    pattern: RegExp;
    tags: SidebarDefinitionsTag[];
  };
};
