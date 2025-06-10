'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface Project {
	title: string;
	description: string;
	image: string;
	technologies: (string | { name: string; icon: string })[];
	link: string;
	badge?: string;
	date: string | { start: string; end: string };
	type: 'academic' | 'personal';
}

const projects: Project[] = [
	{
		title: 'Pstage',
		description: 'Projet de réhabilitation d\'une appli cassée pour la gestion des candidatures de stage. Objectif : remettre tout d\'équerre, corriger les bugs, repenser l\'ergonomie et améliorer les perfs.',
		image: '/pstage.png',
		link: '/projects/pstage',
		date: {
			start: '2024-11-01',
			end: '2025-01-31'
		},
		type: 'academic',
		technologies: [
			{ name: 'Symfony', icon: '/symfony.svg' },
			{ name: 'Java', icon: '/java.svg' },
			{ name: 'Docker', icon: '/docker.svg' },
			{ name: 'Git', icon: '/git.svg' }
		]
	},
	{
		title: 'ChateauTrésor',
		description: 'Une application web de chasses au trésor immersives dans les châteaux de la Loire, pour valoriser le patrimoine français via des énigmes, QR codes et récompenses.',
		image: '/chateautresor.png',
		link: '/projects/chateautresor',
		date: {
			start: '2024-10-01',
			end: '2025-01-31'
		},
		type: 'academic',
		technologies: [
			{ name: 'Next.js', icon: '/nextjs.svg' },
			{ name: 'TypeScript', icon: '/ts.svg' },
			{ name: 'Git', icon: '/git.svg' }
		]
	},
	{
		title: 'Le Bon Stand',
		description: 'Application desktop pour la gestion d\'événements de vente, permettant aux organisateurs de gérer efficacement les commerçants, animations et équipes.',
		image: '/LBS.png',
		link: '/projects/lbs',
		date: {
			start: '2024-04-29',
			end: '2024-06-21'
		},
		type: 'academic',
		technologies: [
			{ name: 'Java', icon: '/java.svg' },
			{ name: 'Figma', icon: '/figma.svg' }
		]
	},
	{
		title: 'Refonte d\'un site web',
		description: 'Refonte du site web d\'Orange Business Services pour le rendre accessible à la génération Alpha, avec une approche centrée sur l\'expérience utilisateur.',
		image: '/OrangeBusinessServices.png',
		link: '/projects/obs',
		date: {
			start: '2023-01-01',
			end: '2023-02-28'
		},
		type: 'academic',
		technologies: [
			{ name: 'HTML5', icon: '/html5.svg' },
			{ name: 'CSS3', icon: '/css3.svg' },
			{ name: 'JavaScript', icon: '/javascript.svg' },
			{ name: 'Git', icon: '/git.svg' }
		]
	},
	{
		title: 'TrobàPark',
		description: 'Une appli mobile imaginée pour réserver une place de parking à distance, avec une borne connectée sur site. Le concept gère tout automatiquement : détection, réservation, libération de la place. Projet présenté en finale nationale des Olympiades de Sciences de l\'Ingénieur.',
		image: '/trobapark.png',
		technologies: ['micro:bit', '3D', 'Électronique', 'Design', 'BDD'],
		link: '/projects/trobapark',
		badge: 'Personnel',
		date: { start: '2022-09', end: '2023-06' },
		type: 'personal'
	},
];

// Fonction pour formater la date
const formatDate = (date: string | { start: string; end: string }) => {
	if (typeof date === 'string') {
		return new Date(date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
	}
	return new Date(date.start).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
};

// Fonction pour obtenir la date de fin
const getEndDate = (date: string | { start: string; end: string }) => {
	if (typeof date === 'string') {
		return new Date(date);
	}
	return new Date(date.end);
};

// Trier les projets : d'abord par type (personnel en premier), puis par date
const sortedProjects = [...projects].sort((a, b) => {
	// Si les types sont différents, prioriser les projets personnels
	if (a.type !== b.type) {
		return a.type === 'personal' ? -1 : 1;
	}
	// Si les types sont identiques, trier par date
	return getEndDate(b.date).getTime() - getEndDate(a.date).getTime();
});

export default function ProjectsSection() {
	const [showAll, setShowAll] = useState(false);
	const displayedProjects = showAll ? sortedProjects : sortedProjects.slice(0, 3);

	return (
		<section id="projects" className="py-20 bg-gray-50">
			<div className="container mx-auto px-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Mes Projets</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Découvrez mes différents projets, académiques et personnels. Allant de simples concepts à de véritables réalisations.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{displayedProjects.map((project, index) => (
						<motion.div
							key={project.title}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.2 }}
							className="bg-white rounded-lg shadow-lg overflow-hidden group relative"
						>
							<div className="relative aspect-[4/3]">
								<Image
									src={project.image}
									alt={project.title}
									fill
									className="object-contain p-4"
								/>
							</div>
							<div className="p-6">
								<div className="flex justify-between items-start mb-2">
									<h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
									<span className={`px-2 py-1 text-xs font-medium rounded-full ${
										project.type === 'academic' 
											? 'bg-blue-100 text-blue-800' 
											: 'bg-green-100 text-green-800'
									}`}>
										{project.type === 'academic' ? 'Académique' : 'Personnel'}
									</span>
								</div>
								<p className="text-gray-600 mb-4">{project.description}</p>
								<p className="text-sm text-gray-500 mb-4">
									{typeof project.date === 'string' 
										? formatDate(project.date)
										: `${formatDate(project.date.start)} - ${formatDate(project.date.end)}`
									}
								</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.technologies.map((tech, index) => (
										<div key={index} className="flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
											{typeof tech === 'string' ? (
												<span>{tech}</span>
											) : (
												<>
													<Image
														src={tech.icon}
														alt={tech.name}
														width={16}
														height={16}
														className="w-4 h-4"
													/>
													<span>{tech.name}</span>
												</>
											)}
										</div>
									))}
								</div>
							</div>
							<Link
								href={project.link}
								className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100"
							>
								<span className="bg-white/90 text-gray-800 px-4 py-2 rounded-full font-medium">
									Voir plus
								</span>
							</Link>
						</motion.div>
					))}
				</div>

				{!showAll && projects.length > 3 && (
					<div className="text-center mt-8">
						<button
							onClick={() => setShowAll(true)}
							className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
						>
							Voir plus de projets
						</button>
					</div>
				)}
			</div>
		</section>
	);
}
