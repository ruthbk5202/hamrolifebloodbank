import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 1. Define protected routes
  const protectedRoutes = ['/admin', '/admin/(.*)'];
  const isProtected = protectedRoutes.some(route => 
    request.nextUrl.pathname.startsWith(route)
  );

  // 2. Check authentication (replace with your logic)
  const isLoggedIn = request.cookies.has('admin-token');
  
  // 3. Redirect if unauthorized
  if (isProtected && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Optional: Limit middleware to specific paths
export const config = {
  matcher: ['/admin/:path*'], // Only run on admin routes
};