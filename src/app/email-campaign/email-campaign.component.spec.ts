import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCampaignComponent } from './email-campaign.component';

describe('EmailCampaignComponent', () => {
  let component: EmailCampaignComponent;
  let fixture: ComponentFixture<EmailCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
