import {
  integer,
  primaryKey,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";

import { usersTable } from "@repo/db/modules/auth/schema/users";
import { baseColumns } from "@repo/db/modules/base/utils";
import { registerDbSchema } from "@repo/db/schemaRegistry";

export const accountsTable = sqliteTable("account", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  accountId: text("provider_account_id").notNull(),
  providerId: text("provider").notNull(),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  accessTokenExpiresAt: integer("access_token_expires_at", {
    mode: "timestamp_ms",
  }),
  refreshTokenExpiresAt: integer("refresh_token_expires_at", {
    mode: "timestamp_ms",
  }),
  scope: text("scope"),
  idToken: text("id_token"),
  password: text("password"),
  ...baseColumns,
});

const schemas = {
  accountsTable,
};
type Schemas = typeof schemas;

// Augment the DbTablesSchema interface
declare module "@repo/db/types" {
  interface DbTablesSchema extends Schemas {}
}

registerDbSchema(schemas);
