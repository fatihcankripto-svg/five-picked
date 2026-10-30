/** @type {import('next').NextConfig} */
const nextConfig = {
  // Avoid reproducible persistent-cache panics in Next 16.4 build workers.
  experimental: { turbopackFileSystemCacheForBuild: false },
  async redirects() {
    return [{ source: '/marketing-and-seo', destination: '/ai-tools/marketing-and-seo', permanent: true }]
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ]
  },
}

export default nextConfig
