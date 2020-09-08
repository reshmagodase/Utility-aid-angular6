import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactThankyouComponent } from './contact-thankyou.component';

describe('ContactThankyouComponent', () => {
  let component: ContactThankyouComponent;
  let fixture: ComponentFixture<ContactThankyouComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactThankyouComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
