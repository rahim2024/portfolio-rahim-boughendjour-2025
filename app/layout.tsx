import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'BOUGHENDJOUR RAHIM - Développeur Full Stack',
	description:
		'Bienvenue sur mon portfolio ! Je suis un développeur passionné axé sur des solutions propres, minimales et efficaces. Je crois en la puissance de la simplicité et du design réfléchi pour créer des expériences numériques impactantes.',
	keywords: [
		'Développeur Full Stack',
		'Code Propre',
		'Design Minimal',
		'Développement Moderne',
		'Développement Web',
		'Expérience Utilisateur',
		'Systèmes de Design',
		'JavaScript',
		'Java',
		'JavaFX',
		'Performance',
		'Accessibilité',
		'Portfolio Minimaliste',
		'BOUGHENDJOUR RAHIM',
	],
	authors: [{ name: 'BOUGHENDJOUR RAHIM' }],
	creator: 'BOUGHENDJOUR RAHIM',
	icons: {
		icon: '/favicon.ico',
		apple: '/favicon.ico',
	},
	openGraph: {
		title: 'BOUGHENDJOUR RAHIM',
		description: 'Bienvenue sur mon portfolio !',
		url: 'https://votre-domaine.com',
		siteName: 'BOUGHENDJOUR RAHIM - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'BOUGHENDJOUR RAHIM - Portfolio Minimal Moderne',
			},
		],
		locale: 'fr_FR',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/favicon.ico" />
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
