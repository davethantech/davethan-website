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
    qualities: [25, 50, 75, 85, 100],
  },
};

export default withPayload(nextConfig);
