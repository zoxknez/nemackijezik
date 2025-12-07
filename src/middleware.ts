export { auth as middleware } from "@/lib/auth"

export const config = {
  matcher: [
    // Protected routes that require authentication
    "/dashboard/:path*",
    "/lekcije/:path*",
    "/vokabular/:path*",
    "/vezbe/:path*",
    "/profil/:path*",
    "/podesavanja/:path*",
    "/api/user/:path*",
    "/api/lessons/:path*",
    "/api/vocabulary/:path*",
    "/api/exercises/:path*",
    "/api/ai/:path*",
  ],
}
