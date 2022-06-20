import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClientSayComponent } from './our-client-say.component';

describe('OurClientSayComponent', () => {
  let component: OurClientSayComponent;
  let fixture: ComponentFixture<OurClientSayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurClientSayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurClientSayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
