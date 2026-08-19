import type { NextConfig } from 'next';

// We import withPayload using the correct named subpath export
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { withPayload } = require('@payloadcms/next/withPayload');

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
