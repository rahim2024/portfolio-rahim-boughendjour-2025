/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn.simpleicons.org'],
	},
	eslint: {
		// Désactive ESLint pendant le build
		ignoreDuringBuilds: true,
	},
};

module.exports = nextConfig; 