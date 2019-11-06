import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityBlogComponent } from './community-blog.component';

describe('CommunityBlogComponent', () => {
  let component: CommunityBlogComponent;
  let fixture: ComponentFixture<CommunityBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
