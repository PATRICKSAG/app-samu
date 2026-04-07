import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ufremid } from './ufremid';

describe('Ufremid', () => {
  let component: Ufremid;
  let fixture: ComponentFixture<Ufremid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ufremid],
    }).compileComponents();

    fixture = TestBed.createComponent(Ufremid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
