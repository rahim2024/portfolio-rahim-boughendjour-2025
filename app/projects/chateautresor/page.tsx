'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ChateauTresorProject() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* En-tête avec titre */}
			<div className="bg-white py-12 shadow-sm">
				<div className="container mx-auto px-4">
					<h1 className="text-5xl md:text-6xl font-bold text-blue-600 text-center">
						ChateauTrésor
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
							ChâteauTrésor est un projet de jeu vidéo éducatif développé dans le cadre de mes études. 
							L&apos;objectif était de créer une expérience ludique permettant aux joueurs d&apos;explorer 
							un château médiéval tout en apprenant l&apos;histoire et l&apos;architecture de l&apos;époque.
						</p>
						<div className="relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden">
							<Image
								src="/chateautresor.png"
								alt="ChateauTrésor"
								fill
								className="object-contain bg-gray-100"
							/>
						</div>
						<p className="text-gray-600 leading-relaxed">
							Cette application offre une nouvelle façon de découvrir le patrimoine français, en combinant technologie 
							moderne et histoire, tout en rendant la visite des châteaux plus interactive et mémorable.
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
							<li>Développement front-end avec Next.js et TypeScript</li>
							<li>Conception d'interfaces utilisateur modernes et responsives</li>
							<li>Intégration de fonctionnalités interactives (énigmes, QR codes)</li>
							<li>Gestion de l'état de l'application</li>
							<li>Optimisation des performances web</li>
							<li>Versioning du code avec Git</li>
							<li>Travail en équipe et gestion de projet</li>
						</ul>
					</motion.section>

					{/* Section Objectifs */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="bg-white rounded-lg shadow-lg p-8 mb-8"
					>
						<div className="flex items-center gap-3 mb-6">
							<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
							</svg>
							<h2 className="text-2xl font-bold text-gray-800">Objectifs</h2>
						</div>
						<p className="text-gray-600 leading-relaxed">
							Les objectifs principaux étaient de mettre en avant les châteaux de la Loire via des expériences 
							interactives, offrir aux visiteurs une découverte immersive et historique via des énigmes, fournir 
							aux propriétaires de châteaux un moyen simple de proposer des événements, et permettre aux entreprises 
							et associations d'organiser des activités originales.
						</p>
					</motion.section>

					{/* Section Travail en Groupe */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="bg-white rounded-lg shadow-lg p-8 mb-8"
					>
						<div className="flex items-center gap-3 mb-6">
							<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
							</svg>
							<h2 className="text-2xl font-bold text-gray-800">Travail en Groupe</h2>
						</div>
						<p className="text-gray-600 leading-relaxed">
							Le projet a été mené par une équipe de six personnes, organisée par affinités et compétences (front, 
							back, data). Nous utilisions Discord pour la communication et les réunions régulières pour synchroniser 
							les tâches. Une branche unique partagée sur GitLab a permis de fluidifier la collaboration entre les 
							membres de l'équipe.
						</p>
					</motion.section>

					{/* Section Travail Individuel */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
						className="bg-white rounded-lg shadow-lg p-8 mb-8"
					>
						<div className="flex items-center gap-3 mb-6">
							<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
							</svg>
							<h2 className="text-2xl font-bold text-gray-800">Travail Individuel</h2>
						</div>
						<p className="text-gray-600 leading-relaxed">
							Dans ce projet, j'ai été responsable du développement de l'API de l'application et de la création des 
							interfaces dédiées aux équipes créatrices de chasses au trésor. J'ai conçu et implémenté toutes les 
							fonctionnalités permettant aux équipes de créer, modifier et gérer leurs chasses au trésor, en mettant 
							l'accent sur l'expérience utilisateur et la facilité d'utilisation. J'ai également participé à la 
							documentation technique et à la rédaction du README du projet.
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
							Ce projet m&apos;a permis de développer mes compétences en développement de jeux vidéo 
							et de créer une expérience éducative engageante. J&apos;ai appris à gérer la complexité 
							d&apos;un projet de jeu tout en maintenant une expérience utilisateur de qualité.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="font-semibold text-gray-800 mb-3">Développement Web</h3>
								<p className="text-gray-600">
									Maîtrise du développement fullstack avec Next.js, React, TypeScript et PostgreSQL, 
									ainsi que l'intégration de Supabase pour la gestion de la base de données et l'authentification.
								</p>
							</div>
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="font-semibold text-gray-800 mb-3">Gestion de Projet</h3>
								<p className="text-gray-600">
									Expérience en travail collaboratif avec GitLab, organisation d'équipe et documentation technique.
								</p>
							</div>
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="font-semibold text-gray-800 mb-3">Tests Utilisateurs</h3>
								<p className="text-gray-600">
									Mise en place et réalisation de tests utilisateurs variés, incluant des tests SUS (System Usability Scale) 
									et des tests Think Aloud pour évaluer et améliorer l'expérience utilisateur.
								</p>
							</div>
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="font-semibold text-gray-800 mb-3">Conception</h3>
								<p className="text-gray-600">
									Création de maquettes détaillées et réalisation de diagrammes UML (classes, objets, séquences) 
									pour structurer et documenter l'architecture de l'application.
								</p>
							</div>
						</div>
						<p className="text-gray-600 leading-relaxed">
							En dehors du développement, j&apos;ai également contribué à la conception des niveaux 
							et à l&apos;équilibrage du gameplay pour assurer une expérience éducative efficace.
						</p>
					</motion.section>

					{/* Lien vers le projet */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="text-center space-y-4"
					>
						<a
							href="https://chateau-tresor.vercel.app"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
						>
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
							</svg>
							Voir le projet en ligne
						</a>
						<div>
							<Link
								href="/"
								className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
							>
								<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
								</svg>
								Retour à l'accueil
							</Link>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
} 