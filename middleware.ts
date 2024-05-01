import { clerkMiddleware } from "@clerk/nextjs/server";
import { authMiddleware } from "@clerk/nextjs";

const clerkAuthMiddleware = clerkMiddleware();

const authMiddlewareConfig = {
  publicRoutes: ['/api/webhooks/clerk'],
  // ignoredRoutes: ["/api/webhooks(.*)"],
};

const authMiddlewareInstance = authMiddleware(authMiddlewareConfig);

export { clerkAuthMiddleware as default, authMiddlewareInstance as authMiddleware };

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
