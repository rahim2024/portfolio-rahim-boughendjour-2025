'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white"></div>
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
			</div>

			<div className="container mx-auto px-4 relative z-10">
				<div className="flex flex-col md:flex-row items-center justify-between gap-12">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="flex-1 text-center md:text-left"
					>
						<h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600">
							BOUGHENDJOUR RAHIM
						</h1>
						<p className="text-xl md:text-2xl text-gray-600 mb-8">
							Actuellement étudiant en 2ième année de BUT informatique à Grenoble
							<br />
							Je suis à la recherche d'une alternance en développement.
						</p>
						<div className="flex flex-wrap gap-4 justify-center md:justify-start">
							<a
								href="#projects"
								className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
							>
								Voir mes projets
							</a>
							<a
								href="#contact"
								onClick={(e) => {
									e.preventDefault();
									document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
								}}
								className="px-6 py-3 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors"
							>
								Me contacter
							</a>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex-1 flex justify-center"
					>
						<div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-xl">
							<Image
								src="/rahim.jpg"
								alt="BOUGHENDJOUR RAHIM"
								fill
								className="object-cover object-top"
								priority
							/>
						</div>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.6 }}
				className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
			>
				<div className="animate-bounce">
					<svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
					</svg>
				</div>
			</motion.div>
		</section>
	);
}
