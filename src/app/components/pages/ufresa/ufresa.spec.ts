import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ufresa } from './ufresa';

describe('Ufresa', () => {
  let component: Ufresa;
  let fixture: ComponentFixture<Ufresa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ufresa],
    }).compileComponents();

    fixture = TestBed.createComponent(Ufresa);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
