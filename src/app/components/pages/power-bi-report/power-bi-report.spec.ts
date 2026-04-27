import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerBiReport } from './power-bi-report';

describe('PowerBiReport', () => {
  let component: PowerBiReport;
  let fixture: ComponentFixture<PowerBiReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerBiReport],
    }).compileComponents();

    fixture = TestBed.createComponent(PowerBiReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
