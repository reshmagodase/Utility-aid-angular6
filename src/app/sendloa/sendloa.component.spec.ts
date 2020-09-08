import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendloaComponent } from './sendloa.component';

describe('SendloaComponent', () => {
  let component: SendloaComponent;
  let fixture: ComponentFixture<SendloaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendloaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendloaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
