/** @type {import('next').NextConfig} */
const nextConfig = {
  // /p2 was merged into the homepage; keep old links working.
  async redirects() {
    return [{ source: "/p2", destination: "/", permanent: true }];
  },
};

export default nextConfig;
