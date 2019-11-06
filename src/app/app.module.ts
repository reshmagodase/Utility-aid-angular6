import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DatePipe } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { Header1Component } from "./header1/header1.component";
import { Footer1Component } from "./footer1/footer1.component";
import { WhyutilityaidComponent } from "./whyutilityaid/whyutilityaid.component";
import { HomeComponent } from "./home/home.component";
import { OurproductsComponent } from "./ourproducts/ourproducts.component";
import { DomesticEnergyComponent } from "./domestic-energy/domestic-energy.component";
import { AdvisoryBoardComponent } from "./advisory-board/advisory-board.component";
import { CustomerStoriesComponent } from "./customer-stories/customer-stories.component";
import { FAQsComponent } from "./faqs/faqs.component";
//import { MediaComponent } from "./media/media.component";
// import { MediaExpandOneComponent } from "./media-expand-one/media-expand-one.component";
// import { MediaExpandTwoComponent } from "./media-expand-two/media-expand-two.component";
import { WorkWithUsComponent } from "./work-with-us/work-with-us.component";
import { ContactComponent } from "./contact/contact.component";
import { RequestComponent } from "./request/request.component";
import { LazyLoadScriptService } from "./lazy-load-script.service";
import { ServiceCallsService } from "./service-calls.service";
import { CaseStudyBlogComponent } from "./case-study-blog/case-study-blog.component";
import { CommunityBlogComponent } from "./community-blog/community-blog.component";
import { OurClientSayComponent } from './our-client-say/our-client-say.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { EnviromentalPolicyComponent } from './enviromental-policy/enviromental-policy.component';
import { BriberyActComponent } from './bribery-act/bribery-act.component';

@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    Footer1Component,
    WhyutilityaidComponent,
    HomeComponent,
    OurproductsComponent,
    DomesticEnergyComponent,
    AdvisoryBoardComponent,
    CustomerStoriesComponent,
    FAQsComponent,
    // MediaComponent,
    // MediaExpandOneComponent,
    // MediaExpandTwoComponent,
    WorkWithUsComponent,
    ContactComponent,
    RequestComponent,
    CaseStudyBlogComponent,
    CommunityBlogComponent,
    OurClientSayComponent,
    PrivacyPolicyComponent,
    EnviromentalPolicyComponent,
    BriberyActComponent
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, HttpClientModule],
  providers: [LazyLoadScriptService, ServiceCallsService, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule {}
