import { Component } from '@angular/core';
import { HeroBanner } from './components/hero-banner/hero-banner';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.html',
  styleUrl: './page-home.scss',
  imports: [
    HeroBanner
  ]
})
export default class PageHome {

}
