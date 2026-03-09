import { NgOptimizedImage } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ToFaIconPipe } from '../../../../shared/pipes/to-fa-icon-pipe';

@Component({
  selector: 'app-lastest-projects',
  templateUrl: './lastest-projects.html',
  styleUrl: './lastest-projects.scss',
  imports: [NgOptimizedImage, FontAwesomeModule, ToFaIconPipe],
})
export class LastestProjects {
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  scrollAmount = 340; // Largeur carte + gap

  latestWorks = [
    {
      title: 'E-commerce Mode',
      description: 'Plateforme complète avec paiement Stripe et gestion de stock temps réel.',
      image: '/images/projects/1.jpeg',
      tags: ['Angular', 'NestJS', 'Stripe'],
    },
    {
      title: 'App Livraison',
      description: 'Application mobile Flutter pour le suivi de colis en temps réel au Cameroun.',
      image: '/images/projects/2.jpeg',
      tags: ['Flutter', 'Google Maps', 'Firebase'],
    },
    {
      title: 'Dashboard RH',
      description: 'Outil SaaS de gestion des congés et de la paie pour PME.',
      image: '/images/projects/3.jpeg',
      tags: ['Angular', 'ChartJS', 'NodeJS'],
    },
    {
      title: 'Site Vitrine Corporate',
      description: "Refonte complète du site institutionnel d'un grand groupe bancaire.",
      image: '/images/projects/4.jpg',
      tags: ['Wordpress', 'GSAP', 'SEO'],
    },
  ];

  prevWork() {
    this.carouselContainer.nativeElement.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
  }

  nextWork() {
    this.carouselContainer.nativeElement.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
  }

  // Logique auto-scroll (optionnel)
  pauseGallery() {
    /* stop interval */
  }
  resumeGallery() {
    /* start interval */
  }

  onProjectChoosed(project: any) {
    // Logique pour ouvrir un modal ou rediriger vers une page de projet
    console.log('Projet cliqué:', project);
  }
}
