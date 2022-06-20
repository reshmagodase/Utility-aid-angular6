import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceValidationComponent } from './invoice-validation.component';

describe('InvoiceValidationComponent', () => {
  let component: InvoiceValidationComponent;
  let fixture: ComponentFixture<InvoiceValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
