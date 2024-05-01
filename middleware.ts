import { clerkMiddleware } from "@clerk/nextjs/server";

const clerkAuthMiddleware = clerkMiddleware();

const authMiddlewareConfig = {
  publicRoutes: ['/api/webhooks/clerk'],
  // ignoredRoutes: ["/api/webhooks(.*)"],
};

// Remove the redundant import and usage of authMiddleware:
// const authMiddlewareInstance = authMiddleware(authMiddlewareConfig);

export { clerkAuthMiddleware as default };

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
