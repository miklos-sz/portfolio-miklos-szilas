/** @type {import('next').NextConfig} */
import { join } from 'path';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net'],
  },
  sassOptions: {
    includePaths: [join('src/styles')],
  },
};

export default nextConfig;
