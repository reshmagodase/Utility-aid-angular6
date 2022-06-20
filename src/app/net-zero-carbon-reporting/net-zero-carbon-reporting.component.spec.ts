import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetZeroCarbonReportingComponent } from './net-zero-carbon-reporting.component';

describe('NetZeroCarbonReportingComponent', () => {
  let component: NetZeroCarbonReportingComponent;
  let fixture: ComponentFixture<NetZeroCarbonReportingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetZeroCarbonReportingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetZeroCarbonReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
