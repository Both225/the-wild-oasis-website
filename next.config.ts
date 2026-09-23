import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aeredkmacmcilqtntrls.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabins/**",
      },
    ],
  },
};

export default nextConfig;
