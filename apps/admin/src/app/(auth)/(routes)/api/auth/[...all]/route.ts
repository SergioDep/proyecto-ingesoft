import { auth } from "@/app/(auth)/_shared/server/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const runtime = "edge";

export const { POST, GET } = toNextJsHandler(auth);
