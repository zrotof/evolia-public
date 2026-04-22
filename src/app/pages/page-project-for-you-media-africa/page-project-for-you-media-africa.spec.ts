import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProjectForYouMediaAfrica } from './page-project-for-you-media-africa';

describe('PageProjectForYouMediaAfrica', () => {
  let component: PageProjectForYouMediaAfrica;
  let fixture: ComponentFixture<PageProjectForYouMediaAfrica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageProjectForYouMediaAfrica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProjectForYouMediaAfrica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
