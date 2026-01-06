/** @type {import('next').NextConfig} */

const nextConfig = {
    // Ignore ESLint errors during builds
    eslint: {
        ignoreDuringBuilds: true,
    },
    // Ignore TypeScript errors during builds
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['images.unsplash.com'],
    }
};

module.exports = nextConfig;