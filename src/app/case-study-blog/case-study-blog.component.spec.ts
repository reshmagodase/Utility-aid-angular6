import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudyBlogComponent } from './case-study-blog.component';

describe('CaseStudyBlogComponent', () => {
  let component: CaseStudyBlogComponent;
  let fixture: ComponentFixture<CaseStudyBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudyBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudyBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
