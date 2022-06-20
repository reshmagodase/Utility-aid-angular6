import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticEnergyComponent } from './domestic-energy.component';

describe('DomesticEnergyComponent', () => {
  let component: DomesticEnergyComponent;
  let fixture: ComponentFixture<DomesticEnergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomesticEnergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
