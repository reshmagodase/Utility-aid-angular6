import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyutilityaidComponent } from './whyutilityaid.component';

describe('WhyutilityaidComponent', () => {
  let component: WhyutilityaidComponent;
  let fixture: ComponentFixture<WhyutilityaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyutilityaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyutilityaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
