import MillionLint from "@million/lint";
import withBundleAnalyzer from "@next/bundle-analyzer";
import path from "path"

const nextConfig = {
  // Your existing Next.js configuration
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve("src"); // Set up the alias
    return config;
  },
};

export default MillionLint.next({
  rsc: true
})(withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig));
