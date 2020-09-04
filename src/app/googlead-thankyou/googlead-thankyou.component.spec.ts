import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleadThankyouComponent } from './googlead-thankyou.component';

describe('GoogleadThankyouComponent', () => {
  let component: GoogleadThankyouComponent;
  let fixture: ComponentFixture<GoogleadThankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleadThankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleadThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
