import { Component, input } from '@angular/core';

@Component({
  selector: 'app-page-coming-soon',
  templateUrl: './page-coming-soon.html',
  styleUrl: './page-coming-soon.scss',
  imports: [],
})
export class PageComingSoon {
  projectUrl = input<string>('');
}
