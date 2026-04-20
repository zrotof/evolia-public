import { TestBed } from '@angular/core/testing';

import { ProjectModal } from './project-modal';

describe('ProjectModal', () => {
  let service: ProjectModal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectModal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
