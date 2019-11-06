import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkWithUsComponent } from './work-with-us.component';

describe('WorkWithUsComponent', () => {
  let component: WorkWithUsComponent;
  let fixture: ComponentFixture<WorkWithUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkWithUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
