'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
