'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function PstageProject() {
	return (
		<div className="min-h-screen bg-gray-50 py-20">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="max-w-4xl mx-auto"
				>
					{/* En-tête */}
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
							Pstage - Amélioration d'une appli existante
						</h1>
						<p className="text-gray-600 text-lg">
							Novembre 2024 - Janvier 2025
						</p>
					</div>

					{/* Image principale */}
					<div className="relative w-full aspect-[16/9] mb-6 rounded-lg overflow-hidden">
						<Image
							src="/pstage.png"
							alt="Pstage"
							fill
							className="object-contain bg-gray-100"
						/>
					</div>

					{/* Description */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
						<p className="text-gray-600 leading-relaxed mb-6">
							Pstage est une application web développée dans le cadre de mon stage chez EEE Omexom. 
							L&apos;objectif était de créer une plateforme de gestion des stages pour les étudiants 
							et les entreprises.
						</p>
						<p className="text-gray-600 leading-relaxed">
							L&apos;application comprend plusieurs fonctionnalités clés : une interface de gestion 
							des stages, un système de suivi des candidatures, et une plateforme de communication 
							entre les étudiants et les entreprises.
						</p>
					</div>

					{/* Objectifs */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Objectifs du projet</h2>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Identifier et corriger les bugs critiques</li>
							<li>Réorganiser l'architecture du code mobile et web</li>
							<li>Améliorer l'ergonomie générale (accessibilité, navigation, feedbacks)</li>
							<li>Mettre en place des tests (unitaires, fonctionnels, interface)</li>
							<li>Conteneuriser toute l'application pour faciliter les déploiements</li>
							<li>Amener la base de données à la 3e forme normale (3NF)</li>
						</ul>
					</div>

					{/* Compétences */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Compétences mobilisées</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="flex items-center gap-2">
								<Image src="/symfony.svg" alt="Symfony" width={24} height={24} />
								<span className="text-gray-600">Symfony / Java (Android Studio)</span>
							</div>
							<div className="flex items-center gap-2">
								<Image src="/docker.svg" alt="Docker" width={24} height={24} />
								<span className="text-gray-600">Conteneurisation avec Docker & Docker-Compose</span>
							</div>
							<div className="flex items-center gap-2">
								<Image src="/git.svg" alt="Git" width={24} height={24} />
								<span className="text-gray-600">CI/CD avec GitLab Runner</span>
							</div>
							<div className="flex items-center gap-2">
								<Image src="/figma.svg" alt="Figma" width={24} height={24} />
								<span className="text-gray-600">Refonte UX/UI selon Bastien & Scapin</span>
							</div>
						</div>
					</div>

					{/* Travail en groupe */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Travail en groupe</h2>
						<p className="text-gray-600 mb-4">
							Projet mené à 4 personnes au lieu des 6 initialement prévues.
						</p>
						<h3 className="text-xl font-semibold text-gray-800 mb-2">Répartition en 2 sous-équipes :</h3>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Mobile : ergonomie + tests + corrections bugs (Aimery, Morgane)</li>
							<li>Web : refacto architecture, sécurité, tests + UI (Rahim, Yani)</li>
						</ul>
						<p className="text-gray-600 mt-4">
							Organisation sur Google Docs + réunions quotidiennes + IA pour relecture.
						</p>
					</div>

					{/* Contribution personnelle */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Ma contribution personnelle</h2>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Participation au refactoring complet du back-end Symfony (création de services, sécurisation des routes, meilleure séparation des rôles)</li>
							<li>Mise en place des tests avec PHPUnit et Cypress</li>
							<li>Intégration de Docker + automatisation du déploiement avec GitLab CI/CD</li>
							<li>Refonte du modèle de données (3NF + création de tables relationnelles)</li>
							<li>Gestion des routes sécurisées, amélioration CSRF & XSS</li>
							<li>Contribution à la doc et à la relecture du rapport</li>
						</ul>
					</div>

					{/* Stack et outils */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Stack et outils</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Technologies</h3>
								<ul className="list-disc list-inside text-gray-600 space-y-1">
									<li>Web : Symfony, Twig, JavaScript, PHP 8.4</li>
									<li>Mobile : Java (Android Studio)</li>
									<li>BDD : PostgreSQL</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Outils</h3>
								<ul className="list-disc list-inside text-gray-600 space-y-1">
									<li>DevOps : Docker, docker-compose, GitLab CI, GitLab Runner</li>
									<li>Tests : PHPUnit, Espresso, Cypress</li>
									<li>Accessibilité & UX : WAVE, tests utilisateur, ergonomie Bastien & Scapin</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Apprentissages */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Ce que j'ai appris</h2>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>À refactorer un projet existant avec plein de contraintes déjà en place</li>
							<li>À bien séparer les responsabilités (service, contrôleur, UI)</li>
							<li>L'importance d'une interface accessible, propre et efficace</li>
							<li>À penser sécurité dès le début : CSRF, XSS, rôles, gestion des erreurs HTTP</li>
							<li>Que l'automatisation du déploiement, même en local, c'est un énorme gain de temps</li>
						</ul>
					</div>

					{/* Bonus */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Bonus</h2>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Mise en place d'un nouveau modèle de données normalisé</li>
							<li>Ajout d'une carte géographique sur l'appli mobile pour voir la distance lieu de stage / domicile</li>
							<li>Fonction de chargement d'offres via fichier texte (batch import)</li>
							<li>Architecture pensée pour être modulable et maintenable</li>
						</ul>
					</div>

					{/* Bouton retour */}
					<div className="text-center">
						<Link
							href="/#projects"
							className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
						>
							Retour aux projets
						</Link>
					</div>
				</motion.div>
			</div>
		</div>
	);
} 