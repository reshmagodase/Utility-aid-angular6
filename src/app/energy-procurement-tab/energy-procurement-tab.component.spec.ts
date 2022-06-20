import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyProcurementTabComponent } from './energy-procurement-tab.component';

describe('EnergyProcurementTabComponent', () => {
  let component: EnergyProcurementTabComponent;
  let fixture: ComponentFixture<EnergyProcurementTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyProcurementTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyProcurementTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
