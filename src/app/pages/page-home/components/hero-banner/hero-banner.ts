import {
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { EvoButton } from '../../../../shared/components/ui/evo-button/evo-button';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
  encapsulation: ViewEncapsulation.None,
  imports: [EvoButton],
})
export class HeroBanner {}
