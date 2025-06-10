'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function OBSProject() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* En-tête avec titre */}
			<div className="bg-white py-12 shadow-sm">
				<div className="container mx-auto px-4">
					<h1 className="text-5xl md:text-6xl font-bold text-blue-600 text-center">
						Orange Business Services
					</h1>
				</div>
			</div>

			{/* Contenu principal */}
			<div className="container mx-auto px-4 py-12">
				<div className="max-w-4xl mx-auto">
					{/* Section Description */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="bg-white rounded-lg shadow-lg p-8 mb-8"
					>
						<div className="flex items-center gap-3 mb-6">
							<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							<h2 className="text-2xl font-bold text-gray-800">Description</h2>
						</div>
						<p className="text-gray-600 leading-relaxed mb-6">
							Orange Business Services est un projet de stage où j&apos;ai travaillé sur le développement 
							d&apos;une application web pour la gestion des services clients. L&apos;objectif était de 
							créer une interface moderne et intuitive pour les équipes de support.
						</p>
						<div className="relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden">
							<Image
								src="/OrangeBusinessServices.png"
								alt="Orange Business Services"
								fill
								className="object-contain bg-gray-100"
							/>
						</div>
						<p className="text-gray-600 leading-relaxed">
							En dehors du développement, j&apos;ai également contribué à la documentation technique 
							et à la formation des utilisateurs.
						</p>
					</motion.section>

					{/* Section Compétences mobilisées */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="bg-white rounded-lg shadow-lg p-8 mb-8"
					>
						<div className="flex items-center gap-3 mb-6">
							<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
							</svg>
							<h2 className="text-2xl font-bold text-gray-800">Compétences mobilisées</h2>
						</div>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Développement front-end avec HTML5, CSS3 et JavaScript</li>
							<li>Conception d'interfaces utilisateur accessibles</li>
							<li>Optimisation pour les jeunes utilisateurs</li>
							<li>Design responsive et adaptatif</li>
							<li>Intégration de contenu multimédia</li>
							<li>Versioning du code avec Git</li>
							<li>Travail en équipe et communication</li>
						</ul>
					</motion.section>

					{/* Section Objectifs */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="bg-white rounded-lg shadow-lg p-8 mb-8"
					>
						<div className="flex items-center gap-3 mb-6">
							<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
							</svg>
							<h2 className="text-2xl font-bold text-gray-800">Objectifs</h2>
						</div>
						<p className="text-gray-600 leading-relaxed">
							L'objectif principal était de créer un site web qui présente de manière attrayante les initiatives numériques 
							et écologiques d'Orange Business Services, tout en engageant un jeune public. Nous devions repenser la présentation 
							des informations pour les rendre accessibles à la génération Alpha, en utilisant un langage et une approche adaptés 
							à leur compréhension.
						</p>
					</motion.section>

					{/* Section Travail en Groupe */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="bg-white rounded-lg shadow-lg p-8 mb-8"
					>
						<div className="flex items-center gap-3 mb-6">
							<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
							<h2 className="text-2xl font-bold text-gray-800">Travail en Groupe</h2>
						</div>
						<p className="text-gray-600 leading-relaxed">
							En équipe de trois personnes, nous avons mené ce projet de manière collaborative. Nous avons commencé par un 
							brainstorming pour définir les besoins et les objectifs, puis réparti les tâches selon les compétences de 
							chacun. Des sessions de travail régulières nous ont permis d'intégrer harmonieusement les différentes parties 
							du site et de valider collectivement les fonctionnalités développées.
						</p>
					</motion.section>

					{/* Section Travail Individuel */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="bg-white rounded-lg shadow-lg p-8 mb-8"
					>
						<div className="flex items-center gap-3 mb-6">
							<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
							</svg>
							<h2 className="text-2xl font-bold text-gray-800">Techniques et Savoir-faire Acquis</h2>
						</div>
						<p className="text-gray-600 leading-relaxed mb-6">
							Ce projet m&apos;a permis de développer mes compétences en développement web et de créer 
							une solution complète pour la gestion des services clients. J&apos;ai appris à travailler 
							dans un environnement professionnel et à collaborer avec une équipe de développeurs.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="font-semibold text-gray-800 mb-3">Développement Web</h3>
								<p className="text-gray-600">
									Maîtrise approfondie des technologies web (HTML, CSS, JavaScript) et des outils de design (Figma) 
									pour créer des interfaces modernes et responsives.
								</p>
							</div>
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="font-semibold text-gray-800 mb-3">Gestion de Projet</h3>
								<p className="text-gray-600">
									Utilisation de Git pour le versioning du code et développement de compétences en travail collaboratif 
									et communication d'équipe.
								</p>
							</div>
						</div>
					</motion.section>

					{/* Bouton retour */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.7 }}
						className="text-center"
					>
						<Link
							href="/"
							className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
							</svg>
							Retour à l'accueil
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
} 