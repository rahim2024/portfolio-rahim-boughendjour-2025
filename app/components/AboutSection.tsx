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
						<p className="text-gray-600 mb-6">
							Bonjour, moi c'est Rahim BOUGHENDJOUR, j'ai 19 ans et je suis étudiant en informatique à l'IUT 2 de Grenoble.
							Je suis passionné par l'informatique depuis que je suis petit, et j'ai décidé d'en faire mon métier.
							Je rêve de devenir ingénieur en informatique.
						</p>
						<p className="text-gray-600">
							Actuellement en stage chez EEE Omexom à Nîmes en tant que développeur, je m'efforce d'apprendre et de grandir 
							dans le domaine du développement d'applications et des solutions techniques.
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
						<div className="space-y-4">
							<div>
								<h4 className="font-medium text-gray-800">Stage Développeur</h4>
								<p className="text-gray-600">EEE Omexom Nîmes - 2025 - En cours</p>
								<p className="text-gray-600">Développement d'applications et solutions techniques</p>
							</div>
							<div>
								<h4 className="font-medium text-gray-800">BUT Informatique - 2ème année</h4>
								<p className="text-gray-600">IUT 2 Grenoble - 2023-2026 - En cours</p>
								<p className="text-gray-600">Parcours : Réalisation d'applications : conception, développement, validation</p>
								<ul className="list-disc list-inside text-gray-600 mt-2">
									<li>Développement web et mobile</li>
									<li>Programmation orientée objet</li>
									<li>Bases de données</li>
									<li>Réseaux et systèmes</li>
								</ul>
							</div>
							<div className="mt-4">
								<h4 className="font-medium text-gray-800">Baccalauréat Général</h4>
								<p className="text-gray-600">Lycée Jean Baptiste Dumas, Alès - 2022-2023</p>
								<p className="text-gray-600">Mention Bien - Spécialités : Mathématiques et Sciences de l'Ingénieur</p>
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