import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastestProjects } from './lastest-projects';

describe('LastestProjects', () => {
  let component: LastestProjects;
  let fixture: ComponentFixture<LastestProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastestProjects]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastestProjects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
