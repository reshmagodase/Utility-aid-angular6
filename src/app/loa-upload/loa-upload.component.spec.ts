import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaUploadComponent } from './loa-upload.component';

describe('LoaUploadComponent', () => {
  let component: LoaUploadComponent;
  let fixture: ComponentFixture<LoaUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
