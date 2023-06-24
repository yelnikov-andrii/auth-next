import { NextConfig } from 'next';

const nextConfig = {
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
