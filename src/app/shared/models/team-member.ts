export interface SocialLink {
  platform: string; // Pour le tooltip (ex: 'LinkedIn', 'Portfolio')
  icon: string; // Le nom de l'icône pour le Pipe (ex: 'faLinkedin')
  url: string; // L'URL de destination
}

export interface TeamMember {
  id: number;
  firstName: string;
  lastName: string;
  role: string;

  // Images
  photoPro: string;
  photoHobby: string;
  hobbyLabel: string;

  // Compétences (Texte)
  mainSkills: string[];

  // Réseaux sociaux
  socials: SocialLink[];
}
