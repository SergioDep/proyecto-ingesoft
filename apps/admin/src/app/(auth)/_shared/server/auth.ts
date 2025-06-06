import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@repo/db/client";
import { accountsTable } from "@repo/db/modules/auth/schema/accounts";
import { sessionsTable } from "@repo/db/modules/auth/schema/sessions";
import { usersTable } from "@repo/db/modules/auth/schema/users";
import { verificationTable } from "@repo/db/modules/auth/schema/verification";

export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    },
  },
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "pg" or "mysql"
    schema: {
      account: accountsTable,
      session: sessionsTable,
      user: usersTable,
      verification: verificationTable,
    },
  }),
});
