import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  NgZone,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// Imports Matter.js
import { Engine, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } from 'matter-js';

// Imports GSAP
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EvoButton } from '../../../../shared/components/ui/evo-button/evo-button';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-services-grid',
  templateUrl: './services-grid.html',
  styleUrl: './services-grid.scss',
  imports: [
    EvoButton
  ],
})
export class ServicesGrid implements AfterViewInit, OnDestroy {
  @ViewChild('tagList') tagList!: ElementRef<HTMLUListElement>;

  private ngZone = inject(NgZone);
  private platformId = inject(PLATFORM_ID);
  private ctx?: gsap.Context;

  readonly toolsWeUse = [
    'Angular',
    'NestJS',
    'Flutter',
    'Keycloak',
    'Docker',
    'Kubernetes',
    'API Rest / GraphQL',
    'AWS',
    'Genkit(AI)',
    'Notion',
    '02Switch',
    'CI / CD',
    'Notion'
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initBentoPhysics();
    }
  }

  private initBentoPhysics() {
    const container = this.tagList.nativeElement;
    const tags = container.querySelectorAll('li');

    // On sort d'Angular pour ne pas déclencher la détection de changement 60 fois par seconde
    this.ngZone.runOutsideAngular(() => {
      this.ctx = gsap.context(() => {
        // 1. Initialisation du moteur physique
        const engine = Engine.create();
        engine.gravity.y = 0.8;
        const runner = Runner.create();

        // Sol invisible (un peu plus bas pour la réception)
        const ground = Bodies.rectangle(
          container.clientWidth / 2,
          container.clientHeight + 25,
          container.clientWidth * 2,
          50,
          { isStatic: true },
        );

        const tagBodies: any[] = [];

        // 2. Création des corps physiques et QuickSetters
        tags.forEach((tag, index) => {
          const rect = tag.getBoundingClientRect();
          const startX = Math.random() * container.clientWidth;
          const startY = -50 - index * 20;

          const body = Bodies.rectangle(startX, startY, rect.width, rect.height, {
            restitution: 0.5,
            frictionAir: 0.07,
            friction: 0.1,
            chamfer: { radius: 5 },
            angle: (Math.random() - 0.5) * 0.4,
          });

          // OPTIMISATION : Accès direct aux propriétés CSS
          const setX = gsap.quickSetter(tag, 'x', 'px');
          const setY = gsap.quickSetter(tag, 'y', 'px');
          const setRotation = gsap.quickSetter(tag, 'rotation', 'deg');

          (body as any).renderData = { setX, setY, setRotation, element: tag };
          tagBodies.push(body);

          // Masquage initial
          gsap.set(tag, {
            position: 'absolute',
            top: 0,
            left: 0,
            x: startX,
            y: startY,
            opacity: 0,
            visibility: 'hidden',
          });
        });

        // 3. INTERACTION SOURIS (Optimisée pour laisser passer le scroll)
        const mouse = Mouse.create(container);

        // CORRECTION SCROLL : On retire les listeners qui bloquent la roue de la souris
        // @ts-ignore
        mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
        // @ts-ignore
        mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);

        const mouseConstraint = MouseConstraint.create(engine, {
          mouse: mouse,
          constraint: {
            stiffness: 0.2,
            render: { visible: false },
          },
        });

        // 4. Boucle de rendu Physique -> DOM
        Events.on(engine, 'afterUpdate', () => {
          tagBodies.forEach((body) => {
            const { x, y } = body.position;
            const { setX, setY, setRotation, element } = body.renderData;

            setX(x - element.offsetWidth / 2);
            setY(y - element.offsetHeight / 2);
            setRotation(body.angle * (180 / Math.PI));
          });
        });

        // 5. Trigger unique (One-Shot)
        ScrollTrigger.create({
          trigger: container,
          start: 'top 85%',
          once: true, // L'animation ne se joue qu'une fois
          onEnter: () => {
            // Apparition visuelle smooth
            gsap.set(tags, { visibility: 'visible' });
            gsap.to(tags, {
              opacity: 1,
              duration: 0.6,
              stagger: 0.05,
              ease: 'power2.out',
            });

            // Lancement de la simulation
            Composite.add(engine.world, [ground, mouseConstraint, ...tagBodies]);
            Runner.run(runner, engine);
          },
        });
      }, container);
    });
  }

  ngOnDestroy(): void {
    // Nettoyage complet (GSAP + ScrollTrigger + Listeners)
    if (this.ctx) {
      this.ctx.revert();
    }
  }
}
