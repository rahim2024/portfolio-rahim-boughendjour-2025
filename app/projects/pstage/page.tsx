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
							Pstage – Amélioration d&apos;une application existante
						</h1>
						<p className="text-gray-600 text-lg">
							Novembre 2024 – Janvier 2025
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
							Pstage est une application de gestion des stages utilisée à l&apos;IUT. Elle est composée de deux interfaces distinctes :
						</p>
						<ul className="list-disc list-inside text-gray-600 mb-6">
							<li>Une application web Symfony pour le gestionnaire de stages, qui permet de publier des offres d&apos;entreprises, suivre les candidatures et valider les étapes administratives.</li>
							<li>Une application mobile Android destinée aux étudiants, leur permettant de consulter les offres et de postuler directement.</li>
						</ul>
						<p className="text-gray-600 leading-relaxed">
							Ce projet visait à moderniser une application déjà en place, à en corriger les faiblesses, et à proposer une meilleure expérience utilisateur.
						</p>
					</div>

					{/* Objectifs */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Objectifs du projet</h2>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Identifier et corriger les bugs critiques</li>
							<li>Réorganiser l&apos;architecture du code (web & mobile)</li>
							<li>Améliorer l&apos;ergonomie générale (navigation, accessibilité, retours visuels)</li>
							<li>Mettre en place des tests automatisés (unitaires, fonctionnels, interface)</li>
							<li>Conteneuriser l&apos;application pour faciliter les déploiements</li>
							<li>Modéliser une nouvelle structure de base de données plus propre et normalisée (vers la 3NF)</li>
						</ul>
					</div>

					{/* Compétences */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Compétences mobilisées</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="flex items-center gap-2">
								<Image src="/symfony.svg" alt="Symfony" width={24} height={24} />
								<span className="text-gray-600">Symfony (web)</span>
							</div>
							<div className="flex items-center gap-2">
								<Image src="/java.svg" alt="Java" width={24} height={24} />
								<span className="text-gray-600">Java (mobile – Android)</span>
							</div>
							<div className="flex items-center gap-2">
								<Image src="/docker.svg" alt="Docker" width={24} height={24} />
								<span className="text-gray-600">Docker</span>
							</div>
							<div className="flex items-center gap-2">
								<Image src="/git.svg" alt="Git" width={24} height={24} />
								<span className="text-gray-600">GitLab</span>
							</div>
							<div className="flex items-center gap-2">
								<Image src="/figma.svg" alt="Figma" width={24} height={24} />
								<span className="text-gray-600">Méthodes UX/UI (Bastien & Scapin)</span>
							</div>
						</div>
					</div>

					{/* Répartition du travail */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Répartition du travail</h2>
						<p className="text-gray-600 mb-4">
							Le projet a été mené en équipe, répartie en deux sous-groupes :
						</p>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Une équipe dédiée à l&apos;application mobile (ergonomie, corrections, tests)</li>
							<li>Une équipe dédiée à l&apos;application web (refactorisation, sécurité, tests, interface)</li>
						</ul>
					</div>

					{/* Contribution personnelle */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Ma contribution personnelle</h2>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Participation à la refonte de l&apos;architecture Symfony (création de services, séparation claire des responsabilités)</li>
							<li>Sécurisation de l&apos;application web (CSRF, XSS, gestion des rôles, gestion des erreurs HTTP)</li>
							<li>Mise en place de tests avec PHPUnit et Cypress</li>
							<li>Remodélisation de la base de données : schéma plus clair, logique, et en accord avec les principes de la 3NF</li>
							<li>Gestion des routes sécurisées</li>
							<li>Participation à la rédaction de la documentation et à la validation fonctionnelle de l&apos;application</li>
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
									<li>Base de données : PostgreSQL</li>
								</ul>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-gray-800 mb-2">Outils</h3>
								<ul className="list-disc list-inside text-gray-600 space-y-1">
									<li>GitLab</li>
									<li>Docker</li>
									<li>Cypress, PHPUnit</li>
									<li>Outils d&apos;accessibilité (WAVE, tests utilisateurs)</li>
								</ul>
							</div>
						</div>
					</div>

					{/* Apprentissages */}
					<div className="bg-white rounded-lg shadow-lg p-8 mb-8">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">Ce que j&apos;ai appris</h2>
						<p className="text-gray-600 mb-6">
							Ce projet m&apos;a permis de développer à la fois mes compétences techniques et humaines :
						</p>
						<ul className="list-disc list-inside text-gray-600 space-y-2">
							<li>Lire et comprendre un code existant avec des contraintes déjà en place</li>
							<li>Gérer le temps et les deadlines dans un projet encadré</li>
							<li>Faire confiance à son équipe et s&apos;adapter aux absences et imprévus</li>
							<li>Améliorer l&apos;accessibilité d&apos;une interface pour la rendre inclusive</li>
							<li>Sécuriser une application Symfony et une application mobile</li>
							<li>Comprendre l&apos;intérêt de Docker pour faciliter l&apos;environnement de développement et le déploiement</li>
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