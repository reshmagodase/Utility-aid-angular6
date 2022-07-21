import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationSectorComponent } from './education-sector.component';

describe('EducationSectorComponent', () => {
  let component: EducationSectorComponent;
  let fixture: ComponentFixture<EducationSectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationSectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
