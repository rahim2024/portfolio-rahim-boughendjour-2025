'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function TrobaparkProject() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* En-tête avec titre */}
			<div className="bg-white py-12 shadow-sm">
				<div className="container mx-auto px-4">
					<h1 className="text-5xl md:text-6xl font-bold text-blue-600 text-center">
						TrobàPark
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
							Dans le cadre de mon projet personnel, j&apos;ai développé TrobàPark, une application web 
							innovante qui simplifie la recherche de places de stationnement. L&apos;objectif était de 
							créer une solution qui permettrait aux utilisateurs de trouver rapidement une place de 
							stationnement disponible, tout en offrant une expérience utilisateur fluide et intuitive.
						</p>
						<div className="relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden">
							<Image
								src="/trobapark.png"
								alt="TrobàPark"
								fill
								className="object-contain bg-gray-100"
							/>
						</div>
						<p className="text-gray-600 leading-relaxed">
							L&apos;application comprend plusieurs fonctionnalités clés : une carte interactive pour 
							localiser les parkings, un système de filtrage par disponibilité et tarifs, et une 
							interface utilisateur responsive adaptée à tous les appareils.
						</p>
						<p className="text-gray-600 leading-relaxed">
							Le projet intègre des idées de partenariats avec des mairies ou des gestionnaires privés de parkings 
							pour un déploiement réel. Ce concept innovant a été présenté lors des Olympiades de Sciences de 
							l'Ingénieur, où nous avons remporté la finale régionale à Montpellier et participé à la finale 
							nationale à Grenoble.
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
							<li>Intégration de cartes interactives avec Mapbox</li>
							<li>Design responsive et UI/UX moderne</li>
							<li>Gestion d&apos;état avec React Context</li>
							<li>Optimisation des performances</li>
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
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Faciliter la recherche et la réservation de places de parking en ville</li>
							<li>Automatiser l'expérience de stationnement</li>
							<li>Réduire le stress et le temps perdu à chercher une place</li>
							<li>Montrer comment des solutions techniques (capteurs, app mobile, BDD) peuvent répondre à des problématiques concrètes</li>
						</ul>
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
						<p className="text-gray-600 leading-relaxed mb-4">
							Projet mené à 4 avec une répartition claire :
						</p>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Conception électronique et prototypage : partagé entre nous tous</li>
							<li>Programmation des capteurs et logique de détection : Mathéo & Rahim</li>
							<li>Modélisation de la borne : Liam</li>
							<li>Communication et visuels : Ancelin & Rahim</li>
							<li>Présentation orale (concours) : tous ensemble</li>
						</ul>
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
						<p className="text-gray-600 leading-relaxed mb-4">
							Dans ce projet, j'ai été responsable de :
						</p>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Programmation de la logique de détection de présence</li>
							<li>Modélisation de la gestion des données clients (base de données)</li>
							<li>Création d'une affiche de communication</li>
							<li>Participation active à la réflexion sur l'expérience utilisateur</li>
						</ul>
					</motion.section>

					{/* Section Techniques et Savoir-faire */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className="bg-white rounded-lg shadow-lg p-8 mb-8"
					>
						<div className="flex items-center gap-3 mb-6">
							<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
							</svg>
							<h2 className="text-2xl font-bold text-gray-800">Techniques et Savoir-faire Acquis</h2>
						</div>
						<p className="text-gray-600 leading-relaxed mb-6">
							Ce projet m&apos;a permis de développer mes compétences en développement web moderne et 
							de créer une application qui répond à un besoin réel. J&apos;ai appris à gérer la 
							complexité d&apos;une application full-stack tout en maintenant une expérience 
							utilisateur de qualité.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="font-semibold text-gray-800 mb-3">Prototypage et Électronique</h3>
								<p className="text-gray-600">
									Prototypage rapide d'un système embarqué et utilisation de capteurs à ultrasons avec micro:bit.
								</p>
							</div>
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="font-semibold text-gray-800 mb-3">Base de Données</h3>
								<p className="text-gray-600">
									Structuration et modélisation d'une base de données relationnelle pour la gestion des utilisateurs.
								</p>
							</div>
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="font-semibold text-gray-800 mb-3">Travail en Équipe</h3>
								<p className="text-gray-600">
									Expérience en travail collaboratif interdisciplinaire et communication de projet à l'oral.
								</p>
							</div>
							<div className="bg-gray-50 p-6 rounded-lg">
								<h3 className="font-semibold text-gray-800 mb-3">Communication</h3>
								<p className="text-gray-600">
									Création de supports de communication visuelle et présentation à la finale nationale.
								</p>
							</div>
						</div>
					</motion.section>

					{/* Galerie d'images */}
					<motion.section
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.7 }}
						className="bg-white rounded-lg shadow-lg p-8 mb-8"
					>
						<div className="flex items-center gap-3 mb-6">
							<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
							</svg>
							<h2 className="text-2xl font-bold text-gray-800">Galerie</h2>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="relative aspect-[4/3] rounded-lg overflow-hidden">
								<Image
									src="/trobaborne.jpg"
									alt="Borne TrobàPark"
									fill
									className="object-contain bg-gray-100"
								/>
							</div>
							<div className="relative aspect-[4/3] rounded-lg overflow-hidden">
								<Image
									src="/trobapub.jpg"
									alt="Publicité TrobàPark"
									fill
									className="object-contain bg-gray-100"
								/>
							</div>
						</div>
					</motion.section>

					{/* Bouton retour */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
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