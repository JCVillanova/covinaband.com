// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // required for static export if using next/image
  },
  basePath: '/covinaband.com', // important for GitHub Pages since it's a subpath
  assetPrefix: '/covinaband.com/', // ensures CSS/JS loads correctly
};

export default nextConfig;