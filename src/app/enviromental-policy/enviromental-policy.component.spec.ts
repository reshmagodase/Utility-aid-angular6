import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviromentalPolicyComponent } from './enviromental-policy.component';

describe('EnviromentalPolicyComponent', () => {
  let component: EnviromentalPolicyComponent;
  let fixture: ComponentFixture<EnviromentalPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviromentalPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviromentalPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
