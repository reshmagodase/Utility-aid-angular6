import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalCharityTenderComponent } from './national-charity-tender.component';

describe('NationalCharityTenderComponent', () => {
  let component: NationalCharityTenderComponent;
  let fixture: ComponentFixture<NationalCharityTenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalCharityTenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalCharityTenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
