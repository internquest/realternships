import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  // Your existing Next.js configuration
};

export default withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})(nextConfig);
