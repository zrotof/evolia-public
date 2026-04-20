import { Injectable , signal } from '@angular/core';
import { Project } from '../../../../models/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectModalService {
  private readonly _isOpen = signal(false);
  private readonly _currentProject = signal<Project | null>(null);

  readonly isOpen = this._isOpen.asReadonly();
  readonly currentProject = this._currentProject.asReadonly();

  open(project: Project): void {
    this._currentProject.set(project);
    this._isOpen.set(true);
  }

  close(): void {
    this._isOpen.set(false);
    // Reset après l'animation de fermeture
    setTimeout(() => {
      this._currentProject.set(null);
    }, 400);
  }
}
