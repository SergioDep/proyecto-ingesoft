import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { usersTable } from "@repo/db/modules/auth/schema/users";
import { baseColumns } from "@repo/db/modules/base/utils";
import { registerDbSchema } from "@repo/db/schemaRegistry";

export const sessionsTable = sqliteTable("session", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  token: text("token"),
  expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  ...baseColumns,
});

const schemas = {
  sessionsTable,
};
type Schemas = typeof schemas;

// Augment the DbTablesSchema interface
declare module "@repo/db/types" {
  interface DbTablesSchema extends Schemas {}
}

registerDbSchema(schemas);
