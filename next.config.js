/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'assets.adidas.com',
              pathname: '**',
            },
        ]
    }
}

module.exports = nextConfig
