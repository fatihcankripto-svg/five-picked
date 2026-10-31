/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: { formats: ['image/avif', 'image/webp'] },
  // Avoid reproducible persistent-cache panics in Next 16.4 build workers.
  experimental: {
    turbopackFileSystemCacheForBuild: false,
    optimizePackageImports: ['lucide-react', 'date-fns'],
  },
  async redirects() {
    return [
      { source: '/marketing-and-seo', destination: '/ai-tools/marketing-and-seo', permanent: true },
      // Exact 301 responses for the retired guide hub and all nine guide routes.
      { source: '/guides', destination: '/blog', statusCode: 301 },
      { source: '/guides/ai-voice-commercial-use', destination: '/ai-tools/video-and-voice', statusCode: 301 },
      { source: '/guides/nordvpn-vs-surfshark', destination: '/vpn-and-security', statusCode: 301 },
      { source: '/guides/shared-vs-cloud-vs-managed-wordpress-hosting', destination: '/web-hosting-and-domains', statusCode: 301 },
      { source: '/guides/best-ai-video-tools-for-beginners', destination: '/ai-tools/video-and-voice', statusCode: 301 },
      { source: '/guides/how-to-choose-a-vpn', destination: '/vpn-and-security', statusCode: 301 },
      { source: '/guides/best-ai-meeting-note-takers', destination: '/ai-tools/meeting-notes', statusCode: 301 },
      { source: '/guides/hostinger-vs-bluehost', destination: '/web-hosting-and-domains', statusCode: 301 },
      { source: '/guides/fliki-vs-pictory', destination: '/ai-tools/video-and-voice', statusCode: 301 },
      { source: '/guides/tidio-vs-chatbase', destination: '/ai-tools/chatbots', statusCode: 301 },
    ]
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
