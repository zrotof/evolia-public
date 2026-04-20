import {
  Component,
  ViewEncapsulation,
  inject,
  signal,
  AfterViewChecked,
  PLATFORM_ID,
  effect,
  computed,
} from '@angular/core';
import {
  NgComponentOutlet,
  isPlatformBrowser,
} from '@angular/common';
import { ProjectModalSidebar } from './components/project-modal-sidebar/project-modal-sidebar';
import { ProjectModalHeader } from './components/project-modal-header/project-modal-header';

import { ProjectService } from '../../../../core/services/project';
import { Project } from '../../../models/project';
import { ProjectModalService } from './services/project-modal';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.html',
  styleUrls: ['./project-modal.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [NgComponentOutlet, ProjectModalHeader, ProjectModalSidebar],
})
export class ProjectModal implements AfterViewChecked {
  private modalService = inject(ProjectModalService);
  private projectService = inject(ProjectService); // ← Injection
  private isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  isOpen = this.modalService.isOpen;
  project = this.modalService.currentProject;
  sidebarData = computed(() => {
    const proj = this.project();
    if (!proj) return null;

    return {
      keyResults: proj.keyResults,
      sections: proj.sections,
    };
  });

  // On récupère le computed de ton ProjectService
  currentComponent = this.projectService.currentComponent;

  scrollProgress = signal(0);
  estimatedReadTime = signal(4);

  private contentElement: HTMLElement | null = null;

  constructor() {
    // Effet qui surveille l'état isOpen
    effect(() => {
      if (!this.isBrowser) return;
      if (this.isOpen()) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
    });
  }

  onScroll(event: Event): void {
    const element = event.target as HTMLElement;
    if (!element) return;

    const totalHeight = element.scrollHeight - element.clientHeight;
    if (totalHeight > 0) {
      const progress = (element.scrollTop / totalHeight) * 100;
      this.scrollProgress.set(Math.round(progress));
    }
  }

  scrollTo(sectionId: string): void {
    if (!this.isBrowser) return;

    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  scrollToTop(): void {
    if (!this.isBrowser) return;

    const contentArea = document.querySelector('.content-side') as HTMLElement;
    if (contentArea) contentArea.scrollTo({ top: 0, behavior: 'smooth' });
  }

  closeModal(): void {
    this.modalService.close();
  }

  ngAfterViewChecked(): void {
    if (this.isOpen() && !this.contentElement) {
      if (!this.isBrowser) return;

      this.contentElement = document.querySelector('.dynamic-content-injector');
      if (this.contentElement) {
        const text = this.contentElement.textContent || '';
        const words = text.trim().split(/\s+/).length;
        this.estimatedReadTime.set(Math.ceil(words / 230) || 4);
      }
    }
  }
}