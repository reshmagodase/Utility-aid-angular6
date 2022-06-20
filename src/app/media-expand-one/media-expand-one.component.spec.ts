import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaExpandOneComponent } from './media-expand-one.component';

describe('MediaExpandOneComponent', () => {
  let component: MediaExpandOneComponent;
  let fixture: ComponentFixture<MediaExpandOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaExpandOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaExpandOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
