import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoButton } from './evo-button';

describe('EvoButton', () => {
  let component: EvoButton;
  let fixture: ComponentFixture<EvoButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvoButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvoButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
