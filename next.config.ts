import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  name: 'auth-next',
  basePath: '/',
  assetPrefix: '/',
  output: 'export',
  exportPathMap: async () => {
    return {
      '/': { page: '/' },
      '/login': { page: '/login' },
      '/posts': { page: '/posts' },
    };
  },
};

export default nextConfig;
