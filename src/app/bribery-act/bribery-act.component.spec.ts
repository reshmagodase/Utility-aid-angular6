import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriberyActComponent } from './bribery-act.component';

describe('BriberyActComponent', () => {
  let component: BriberyActComponent;
  let fixture: ComponentFixture<BriberyActComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriberyActComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriberyActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
