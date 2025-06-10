'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
	return (
		<section id="about" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
				>
					À propos de moi
				</motion.h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="bg-white rounded-lg shadow-lg p-8"
					>
						<h3 className="text-xl font-semibold mb-4 text-blue-600">Qui suis-je ?</h3>
						<p className="text-gray-600 leading-relaxed mb-6">
							Je suis actuellement en 2ème année de BUT Informatique à l&apos;IUT de Nîmes, 
							spécialisé dans la réalisation d&apos;applications : conception, développement, validation. 
							Mon parcours est marqué par une passion pour le développement web et mobile, 
							que j&apos;ai pu mettre en pratique lors de mes stages et projets personnels.
						</p>
						<p className="text-gray-600 leading-relaxed mb-6">
							Mon objectif est de devenir développeur full-stack, en combinant mes compétences 
							en développement front-end et back-end. Je m&apos;intéresse particulièrement aux 
							technologies modernes comme React, Next.js, et Node.js.
						</p>
						<p className="text-gray-600 leading-relaxed">
							En dehors du code, je m&apos;intéresse à la photographie et au design, ce qui 
							m&apos;aide à développer mon sens de l&apos;esthétique et de l&apos;expérience utilisateur.
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="bg-white rounded-lg shadow-lg p-8"
					>
						<h3 className="text-xl font-semibold mb-4 text-blue-600">Mon parcours</h3>
						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
									<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-gray-800">Stage Développeur</h3>
									<p className="text-gray-600">EEE Omexom Nîmes - En cours</p>
									<p className="text-gray-600">Développement d&apos;applications et solutions techniques</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
									<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-gray-800">BUT Informatique</h3>
									<p className="text-gray-600">IUT de Nîmes - 2022-2025</p>
									<p className="text-gray-600">Spécialisation en développement d&apos;applications</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
									<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
									</svg>
								</div>
								<div>
									<h3 className="font-semibold text-gray-800">Baccalauréat Général</h3>
									<p className="text-gray-600">Lycée Jean Vilar - 2022</p>
									<p className="text-gray-600">Spécialités Mathématiques et NSI</p>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="bg-white rounded-lg shadow-lg p-8 md:col-span-2"
					>
						<h3 className="text-xl font-semibold mb-4 text-blue-600">Mes centres d'intérêt</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div>
								<h4 className="font-medium text-gray-800 mb-2">Jeux Vidéos</h4>
								<p className="text-gray-600">
									J'ai découvert les jeux vidéos quand j'étais petit et depuis ça n'a cessé de m'intéresser. 
									Jouer aux jeux vidéos, créer des jeux vidéos, regarder des compétitions de jeux vidéos, 
									je suis passé par tout. Cette passion m'a permis de développer ma créativité et ma logique.
								</p>
							</div>
							<div>
								<h4 className="font-medium text-gray-800 mb-2">Électronique</h4>
								<p className="text-gray-600">
									L'électronique est une passion qui va de pair avec l'informatique. Les circuits imprimés, 
									la soudure, et la conception de systèmes électroniques me fascinent. Cette passion me permet 
									de comprendre le fonctionnement des appareils qui nous entourent.
								</p>
							</div>
							<div>
								<h4 className="font-medium text-gray-800 mb-2">Psychologie Sociale</h4>
								<p className="text-gray-600">
									Je m'intéresse aux phénomènes sociaux et aux comportements humains. Ça m'a toujours fasciné 
									de comprendre comment le cerveau fonctionne et comment les individus interagissent entre eux. 
									Cette passion m'aide à mieux comprendre les utilisateurs dans mes projets.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
} 