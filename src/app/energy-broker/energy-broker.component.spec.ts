import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyBrokerComponent } from './energy-broker.component';

describe('EnergyBrokerComponent', () => {
  let component: EnergyBrokerComponent;
  let fixture: ComponentFixture<EnergyBrokerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyBrokerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyBrokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
