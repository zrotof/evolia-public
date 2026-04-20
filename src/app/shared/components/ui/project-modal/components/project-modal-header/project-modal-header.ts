import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-project-modal-header',
  templateUrl: './project-modal-header.html',
  styleUrls: ['./project-modal-header.scss'],
  imports: [],
})
export class ProjectModalHeader {
  title = input.required<string>();
  scrollProgress = input(0);
  estimatedReadTime = input(0);

  // Output pour fermer la modale
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}