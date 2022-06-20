import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurHeritageComponent } from './our-heritage.component';

describe('OurHeritageComponent', () => {
  let component: OurHeritageComponent;
  let fixture: ComponentFixture<OurHeritageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurHeritageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurHeritageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
