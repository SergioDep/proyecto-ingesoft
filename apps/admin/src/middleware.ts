import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/(auth)/_shared/server/auth";
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGGEDIN_REDIRECT,
  publicRoutes,
} from "@/app/(base)/_shared/lib/config/routes";

type Session = typeof auth.$Infer.Session;

// export default auth((request) => {
export async function middleware(request: NextRequest) {
  const { nextUrl } = request;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  let response = NextResponse.next();

  if (isApiAuthRoute) {
    // response = NextResponse.next();
  } else {
    let session: Session | null = null;
    try {
      const sessionData = await fetch(
        `${request.nextUrl.origin}/api/auth/get-session`,
        {
          headers: {
            cookie: request.headers.get("cookie") || "",
          },
        },
      );

      if (sessionData.ok) {
        session = (await sessionData.json()) as Session | null;
      } else {
        console.warn("Failed to fetch session: ", sessionData.status);
      }
    } catch (error) {
      console.error("Error fetching session:", error);
    }

    const user = session?.user;

    if (isAuthRoute) {
      if (user) {
        response = NextResponse.redirect(
          new URL(DEFAULT_LOGGEDIN_REDIRECT, nextUrl.origin),
        );
      }
    } else if (!isPublicRoute) {
      if (!user) {
        // Tried to access a protected route without being logged in
        response = NextResponse.redirect(new URL(`/login`, nextUrl.origin));
        // }
      } else {
        // Business specific logic for checking user permissions maybe?
      }
    }
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
