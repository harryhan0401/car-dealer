import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware function to handle user profile setup redirection.
 *
 * This middleware checks the presence and value of the "isProfileSetup" cookie
 * to determine whether the user's profile setup is complete. Based on this check,
 * it redirects the user to the appropriate page or allows the request to proceed.
 *
 * @param req - The incoming `NextRequest` object containing request details.
 * @returns A `NextResponse` object that either redirects the user or allows the request to continue.
 *
 * - If the "isProfileSetup" cookie is not set to "true" and the user is not already
 *   on the "/users/setup" page, the middleware redirects the user to "/users/setup".
 * - If the "isProfileSetup" cookie is set to "true" and the user is on the "/users/setup"
 *   page, the middleware redirects the user to "/users/".
 * - Otherwise, the request is allowed to continue to its intended destination.
 */
export function middleware(req: NextRequest) {
    const cookie = req.cookies.get("isProfileSetup");
    const isProfileSetup = cookie?.value === "true";
    if (!isProfileSetup && req.nextUrl.pathname !== "/users/setup") {
        return NextResponse.redirect(new URL("/users/setup", req.url));
    }
    if (isProfileSetup && req.nextUrl.pathname === "/users/setup") {
        return NextResponse.redirect(new URL("/users/", req.url));
    }

    // Allow request to continue
    return NextResponse.next();
}

// Apply middleware only to specific dashboard routes
export const config = {
    matcher: ["/users/:path*"] // Protects all /users/* routes
};
