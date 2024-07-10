/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    transpilePackages: ['three'],
};

export default nextConfig;
