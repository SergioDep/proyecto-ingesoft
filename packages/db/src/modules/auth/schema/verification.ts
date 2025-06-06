import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { baseColumns } from "@repo/db/modules/base/utils";
import { registerDbSchema } from "@repo/db/schemaRegistry";

export const verificationTable = sqliteTable("verification", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: integer("expires_at", { mode: "timestamp_ms" }).notNull(),
  ...baseColumns,
});

const schemas = {
  verificationTable: verificationTable,
};
type Schemas = typeof schemas;

// Augment the DbTablesSchema interface
declare module "@repo/db/types" {
  interface DbTablesSchema extends Schemas {}
}

registerDbSchema(schemas);
