// shared/constants/projects.data.ts
import { Project } from '../models/project';

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    slug: 'foryou-media',
    title: 'Média jeunesse africain',
    clientName: 'For You Média',
    image: '/images/projects/for-you-media.png',
    keyResults: [
      { icon: 'faRocket', label: 'Temps de chargement < 2s' },
      { icon: 'faMobileAlt', label: '100% mobile-first' },
      { icon: 'faChartLine', label: 'SEO optimisé' },
    ],
    sections: [
      { id: 'concept', label: 'Le Concept' },
      { id: 'design', label: 'Design Dynamique' },
      { id: 'performance', label: 'Performance' },
    ],
    seoTitle: 'For You Média | Plateforme d’Information et Divertissement Africaine',
    seoDescription:
      'Développement d’une interface web dynamique et interactive pour For You Média Africa.',
    keywords: 'média africain, actualité Afrique, For You Média',
  },
  {
    id: 2,
    slug: 'stella',
    title: 'E-commerce headless premium',
    clientName: 'Stella',
    image: '/images/projects/stella.png',
    keyResults: [
      { icon: 'faShoppingCart', label: 'Checkout ultra-rapide' },
      { icon: 'faServer', label: 'Architecture headless' },
      { icon: 'faShieldAlt', label: 'Paiements sécurisés' },
    ],
    sections: [
      { id: 'concept', label: 'Le Projet' },
      { id: 'tech', label: 'Stack technique' },
      { id: 'admin', label: 'Back-office' },
    ],
    seoTitle: 'Développement E-commerce Stella | Expert Vendure & Angular',
    seoDescription:
      'Découvrez l’architecture headless Vendure et le frontend Angular ultra-rapide.',
    keywords: 'e-commerce Afrique, Vendure, NestJS',
  }
/*
  {
    id: 3,
    slug: 'liko-auto',
    title: 'Négoce automobile digitalisé',
    clientName: 'Liko Auto',
    image: '/images/projects/liko-auto.png',
    keyResults: [
      { icon: 'faCar', label: 'Catalogue dynamique' },
      { icon: 'faSearch', label: 'Recherche avancée' },
      { icon: 'faTools', label: 'Gestion de stock' },
    ],
    sections: [
      { id: 'concept', label: 'Le Projet' },
      { id: 'inventory', label: 'Inventaire' },
      { id: 'search', label: 'Recherche' },
    ],
    seoTitle: 'Liko Auto | Plateforme de Négoce et Gestion Automobile',
    seoDescription:
      'Solution web de gestion de catalogue de véhicules et interface de recherche avancée.',
    keywords: 'négoce automobile, courtage auto, Liko Auto',
  }
*/,

  {
    id: 4,
    slug: 'soprano-vesinet',
    title: 'Restaurant italien immersif',
    clientName: 'Soprano Vésinet',
    image: '/images/projects/soprano-vesinet.png',
    keyResults: [
      { icon: 'faUtensils', label: 'Menu animé' },
      { icon: 'faMagic', label: 'Animations premium' },
      { icon: 'faCalendarCheck', label: 'Réservation fluide' },
    ],
    sections: [
      { id: 'concept', label: 'L’Ambiance' },
      { id: 'ux', label: 'Expérience' },
    ],
    seoTitle: 'Soprano Vésinet | Restaurant Italien Haut de Gamme',
    seoDescription: 'Conception d’un site vitrine élégant pour le restaurant Soprano au Vésinet.',
    keywords: 'restaurant italien Le Vésinet, Soprano Vésinet',
  },
  {
    id: 5,
    slug: 'elites-voyages',
    title: 'Voyage de luxe sur-mesure',
    clientName: 'Elites Voyages',
    image: '/images/projects/elites-voyages.png',
    keyResults: [
      { icon: 'faGlobeAmericas', label: 'Destinations infinies' },
      { icon: 'faCameraRetro', label: 'Galeries immersives' },
      { icon: 'faMapMarkedAlt', label: 'Cartographie interactive' },
    ],
    sections: [
      { id: 'concept', label: 'La Vision' },
      { id: 'destinations', label: 'Destinations' },
      { id: 'interface', label: 'Interface' },
    ],
    seoTitle: 'Elites Voyages | Agence de Voyage sur-mesure & Séjours de Luxe',
    seoDescription: 'Plateforme digitale conçue pour l’exploration de destinations mondiales.',
    keywords: 'voyage sur mesure, agence de voyage luxe',
  },
  {
    id: 6,
    slug: 'association-mahol-diaspora',
    title: 'Solidarité diaspora digitale',
    clientName: 'Mahol Diaspora',
    image: '/images/projects/mahol-diaspora.png',
    keyResults: [
      { value: '+288', label: 'adhérents actifs' },
      { icon: 'faHandHoldingHeart', label: 'Collectes automatisées' },
      { icon: 'faCogs', label: 'Dashboard dédié' },
    ],
    sections: [
      { id: 'presentation', label: 'Aperçu' },
      { id: 'contexte', label: 'Contexte' },
      { id: 'defis', label: 'Défis' },
      { id: 'solution', label: 'Solution' },
      { id: 'resultats', label: 'Résultats' },
    ],
    seoTitle: 'Mahol Diaspora | Plateforme Solidaire & Engagement Communautaire',
    seoDescription:
      'Portail web moderne pour l’association Mahol Diaspora : gestion de membres et collectes.',
    keywords: 'association solidaire, diaspora camerounaise',
  },
];
