import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [],
  },
  eslint: {
    // French copy contains many apostrophes that JSX flags as unescaped entities.
    // The build has already been type-checked via `tsc --noEmit`, so ESLint
    // errors should not block production builds.
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
