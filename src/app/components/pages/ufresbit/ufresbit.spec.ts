import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ufresbit } from './ufresbit';

describe('Ufresbit', () => {
  let component: Ufresbit;
  let fixture: ComponentFixture<Ufresbit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ufresbit],
    }).compileComponents();

    fixture = TestBed.createComponent(Ufresbit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
