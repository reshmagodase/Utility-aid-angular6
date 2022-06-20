import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidManagementComponent } from './void-management.component';

describe('VoidManagementComponent', () => {
  let component: VoidManagementComponent;
  let fixture: ComponentFixture<VoidManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoidManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
