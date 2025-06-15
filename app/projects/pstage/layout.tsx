import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pstage - Amélioration d\'une application existante',
  description: 'Projet de modernisation d\'une application de gestion des stages à l\'IUT',
};

export default function PstageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 