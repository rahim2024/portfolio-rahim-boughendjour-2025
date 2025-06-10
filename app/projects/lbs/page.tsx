'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function LBSProject() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* En-tête avec titre */}
			<div className="bg-white py-12 shadow-sm">
				<div className="container mx-auto px-4">
					<h1 className="text-5xl md:text-6xl font-bold text-blue-600 text-center">
						Le Bon Stand
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
							Le Bon Stand est une application de bureau développée en Java qui permet aux exposants 
							d&apos;un salon de gérer leurs stands et leurs produits. L&apos;objectif était de créer 
							une solution complète pour la gestion des expositions, en facilitant l&apos;organisation 
							et le suivi des stands.
						</p>
						<div className="relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden">
							<Image
								src="/LBS.png"
								alt="Le Bon Stand"
								fill
								className="object-contain bg-gray-100"
							/>
						</div>
						<p className="text-gray-600 leading-relaxed mb-6">
							Ce projet m&apos;a permis de développer mes compétences en développement d&apos;applications 
							de bureau et de créer une solution complète pour la gestion des expositions. J&apos;ai appris 
							à gérer la complexité d&apos;un projet de grande envergure tout en maintenant une expérience 
							utilisateur de qualité.
						</p>
						<p className="text-gray-600 leading-relaxed">
							En dehors du développement, j&apos;ai également contribué à la conception de l&apos;interface 
							utilisateur et à la documentation technique du projet.
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
							<li>Développement d'applications desktop avec Java et JavaFX</li>
							<li>Conception d'interfaces graphiques</li>
							<li>Gestion de base de données</li>
							<li>Modélisation UML</li>
							<li>Gestion de projet</li>
							<li>Documentation technique</li>
							<li>Tests et débogage</li>
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
							Les objectifs principaux de ce projet étaient multiples : créer une application avec une interface 
							graphique intuitive et conviviale, développer des solutions innovantes pour les défis spécifiques 
							rencontrés, mener le projet du début à la fin en respectant les délais, et organiser efficacement 
							le travail d'équipe pour répondre aux besoins des utilisateurs.
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
							Le projet a été mené de manière collaborative, en commençant par un brainstorming approfondi pour 
							définir les besoins et les objectifs. Nous avons ensuite réparti les tâches selon les compétences 
							de chaque membre de l'équipe. Des sessions de travail régulières ont permis d'intégrer harmonieusement 
							les différentes parties de l'application et de valider collectivement les fonctionnalités développées.
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
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
							<h2 className="text-2xl font-bold text-gray-800">Travail Individuel</h2>
						</div>
						<p className="text-gray-600 leading-relaxed">
							Dans ce projet, j'ai été responsable de plusieurs aspects clés : la réalisation du diagramme d'objet, 
							la création du pitch en anglais, et la contribution à la conception de la maquette IHM. J'ai également 
							participé à la rédaction du rapport de gestion de projet et aidé à la réalisation des diagrammes UML 
							pour la conception de l'application.
						</p>
					</motion.section>

					{/* Section Techniques et Savoir-faire */}
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
							Ce projet m'a permis d'acquérir et de perfectionner plusieurs compétences essentielles :
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="font-semibold text-gray-800 mb-3">Développement Java</h3>
								<p className="text-gray-600">
									Maîtrise approfondie de Java et JavaFX pour le développement d'applications desktop, 
									incluant la conception d'interfaces graphiques et la gestion de base de données.
								</p>
							</div>
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="font-semibold text-gray-800 mb-3">Gestion de Projet</h3>
								<p className="text-gray-600">
									Expérience en modélisation UML, documentation technique et travail en équipe, 
									avec une attention particulière à la qualité du code et aux tests.
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