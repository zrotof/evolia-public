import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalHeader } from './project-modal-header';

describe('ProjectModalHeader', () => {
  let component: ProjectModalHeader;
  let fixture: ComponentFixture<ProjectModalHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectModalHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectModalHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
