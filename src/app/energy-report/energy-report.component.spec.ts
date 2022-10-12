import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyReportComponent } from './energy-report.component';

describe('EnergyReportComponent', () => {
  let component: EnergyReportComponent;
  let fixture: ComponentFixture<EnergyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
