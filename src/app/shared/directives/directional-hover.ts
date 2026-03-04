import { Directive, ElementRef, HostListener, input, inject, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDirectionalHover]',
  standalone: true
})
export class DirectionalHover{
  hoverColor = input<string>('#0E4735');
  
  private el = inject(ElementRef);

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(e: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 1. On place le centre du cercle sous la souris (Point d'entrée)
    this.el.nativeElement.style.setProperty('--x', `${x}px`);
    this.el.nativeElement.style.setProperty('--y', `${y}px`);
    
    // 2. On définit la couleur
    if (this.hoverColor()) {
      this.el.nativeElement.style.setProperty('--hover-bg', this.hoverColor());
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // 1. On déplace le point de disparition vers la sortie
    this.el.nativeElement.style.setProperty('--x', `${x}px`);
    this.el.nativeElement.style.setProperty('--y', `${y}px`);
  }
}