'use client';

import React from 'react';
import Link from 'next/link';

export default function PstagePage() {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6">Pstage – Amélioration d&apos;une application existante</h1>
			
			<p className="text-gray-600 mb-8">Novembre 2024 – Janvier 2025</p>
			
			<div className="border-t border-gray-200 my-8"></div>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Description</h2>
				<p className="mb-4">
					Pstage est une application de gestion des stages utilisée à l&apos;IUT. Elle est composée de deux interfaces distinctes :
				</p>
				<ul className="list-disc pl-6 mb-4">
					<li>Une application web Symfony pour le gestionnaire de stages, qui permet de publier des offres d&apos;entreprises, suivre les candidatures et valider les étapes administratives.</li>
					<li>Une application mobile Android destinée aux étudiants, leur permettant de consulter les offres et de postuler directement.</li>
				</ul>
				<p>
					Ce projet visait à moderniser une application déjà en place, à en corriger les faiblesses, et à proposer une meilleure expérience utilisateur.
				</p>
			</section>

			<div className="border-t border-gray-200 my-8"></div>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Objectifs du projet</h2>
				<ul className="list-disc pl-6">
					<li>Identifier et corriger les bugs critiques</li>
					<li>Réorganiser l&apos;architecture du code (web & mobile)</li>
					<li>Améliorer l&apos;ergonomie générale (navigation, accessibilité, retours visuels)</li>
					<li>Mettre en place des tests automatisés (unitaires, fonctionnels, interface)</li>
					<li>Conteneuriser l&apos;application pour faciliter les déploiements</li>
					<li>Modéliser une nouvelle structure de base de données plus propre et normalisée (vers la 3NF)</li>
				</ul>
			</section>

			<div className="border-t border-gray-200 my-8"></div>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Compétences mobilisées</h2>
				<ul className="list-disc pl-6">
					<li>Symfony (web)</li>
					<li>Java (mobile – Android)</li>
					<li>Docker</li>
					<li>GitLab</li>
					<li>Cypress, PHPUnit</li>
					<li>PostgreSQL</li>
					<li>Méthodes UX/UI (Bastien & Scapin)</li>
					<li>Travail en équipe (réunions quotidiennes, répartition des tâches)</li>
				</ul>
			</section>

			<div className="border-t border-gray-200 my-8"></div>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Répartition du travail</h2>
				<p className="mb-4">
					Le projet a été mené en équipe, répartie en deux sous-groupes :
				</p>
				<ul className="list-disc pl-6">
					<li>Une équipe dédiée à l&apos;application mobile (ergonomie, corrections, tests)</li>
					<li>Une équipe dédiée à l&apos;application web (refactorisation, sécurité, tests, interface)</li>
				</ul>
			</section>

			<div className="border-t border-gray-200 my-8"></div>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Ma contribution personnelle</h2>
				<ul className="list-disc pl-6">
					<li>Participation à la refonte de l&apos;architecture Symfony (création de services, séparation claire des responsabilités)</li>
					<li>Sécurisation de l&apos;application web (CSRF, XSS, gestion des rôles, gestion des erreurs HTTP)</li>
					<li>Mise en place de tests avec PHPUnit et Cypress</li>
					<li>Remodélisation de la base de données : schéma plus clair, logique, et en accord avec les principes de la 3NF</li>
					<li>Gestion des routes sécurisées</li>
					<li>Participation à la rédaction de la documentation et à la validation fonctionnelle de l&apos;application</li>
				</ul>
			</section>

			<div className="border-t border-gray-200 my-8"></div>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Stack et outils</h2>
				
				<h3 className="text-xl font-semibold mb-2">Technologies</h3>
				<ul className="list-disc pl-6 mb-4">
					<li>Web : Symfony, Twig, JavaScript, PHP 8.4</li>
					<li>Mobile : Java (Android Studio)</li>
					<li>Base de données : PostgreSQL</li>
				</ul>

				<h3 className="text-xl font-semibold mb-2">Outils</h3>
				<ul className="list-disc pl-6">
					<li>GitLab</li>
					<li>Docker</li>
					<li>Cypress, PHPUnit</li>
					<li>Outils d&apos;accessibilité (WAVE, tests utilisateurs)</li>
				</ul>
			</section>

			<div className="border-t border-gray-200 my-8"></div>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Ce que j&apos;ai appris</h2>
				<p className="mb-4">
					Ce projet m&apos;a permis de développer à la fois mes compétences techniques et humaines :
				</p>
				<ul className="list-disc pl-6">
					<li>Lire et comprendre un code existant avec des contraintes déjà en place</li>
					<li>Gérer le temps et les deadlines dans un projet encadré</li>
					<li>Faire confiance à son équipe et s&apos;adapter aux absences et imprévus</li>
					<li>Améliorer l&apos;accessibilité d&apos;une interface pour la rendre inclusive</li>
					<li>Sécuriser une application Symfony et une application mobile</li>
					<li>Comprendre l&apos;intérêt de Docker pour faciliter l&apos;environnement de développement et le déploiement</li>
				</ul>
			</section>

			<div className="text-center">
				<Link
					href="/projects"
					className="inline-block bg-gray-100 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors"
				>
					Retour aux projets
				</Link>
			</div>
		</div>
	);
} 