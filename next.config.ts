import type { NextConfig } from 'next';

import { withPayload } from '@payloadcms/next/withPayload';

const nextConfig: NextConfig = {
  webpack: (webpackConfig: { externals: string[] }) => {
    // Exclude server-only CLI tools from the browser bundle
    webpackConfig.externals = [
      ...(webpackConfig.externals || []),
      'drizzle-kit',
    ];
    return webpackConfig;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    qualities: [25, 50, 75, 85, 100],
  },
};

export default withPayload(nextConfig);
