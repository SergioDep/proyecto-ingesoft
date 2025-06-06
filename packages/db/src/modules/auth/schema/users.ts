import type { z } from "zod";
import {
  foreignKey,
  index,
  integer,
  sqliteTable,
  text,
} from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

import { baseColumns } from "@repo/db/modules/base/utils";
import { registerDbSchema } from "@repo/db/schemaRegistry";

export const usersTable = sqliteTable(
  "user",
  {
    id: text("id")
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    name: text("name"),
    email: text("email").unique(),
    emailVerified: integer("email_verified", { mode: "boolean" }),
    image: text("image"),
    middleName: text("middle_name"),
    lastName: text("last_name"),
    ...baseColumns,
    modifiedBy: text("modified_by"),
  },
  (table) => {
    return [
      index("users_name_index").on(table.name),
      index("users_email_index").on(table.email),
      index("users_created_at_index").on(table.createdAt),
      foreignKey({
        columns: [table.modifiedBy],
        foreignColumns: [table.id],
      }),
    ];
  },
);

export const insertUserSchema = createInsertSchema(usersTable);
export const unsafeSelectUserSchema = createSelectSchema(usersTable);

const schemas = {
  usersTable,
};
type Schemas = typeof schemas;

// Augment the DbTablesSchema interface
declare module "@repo/db/types" {
  interface DbTablesSchema extends Schemas {}
}

registerDbSchema(schemas);
