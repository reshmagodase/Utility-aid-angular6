import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DatePipe } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
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
import { WorkWithUsComponent } from "./work-with-us/work-with-us.component";
import { ContactComponent } from "./contact/contact.component";
import { RequestComponent } from "./request/request.component";
import { LazyLoadScriptService } from "./lazy-load-script.service";
import { ServiceCallsService } from "./service-calls.service";
import { CaseStudyBlogComponent } from "./case-study-blog/case-study-blog.component";
import { CommunityBlogComponent } from "./community-blog/community-blog.component";
import { OurClientSayComponent } from "./our-client-say/our-client-say.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { EnviromentalPolicyComponent } from "./enviromental-policy/enviromental-policy.component";
import { BriberyActComponent } from "./bribery-act/bribery-act.component";
import { EngineComponent } from "./engine/engine.component";
import { ScreenLoaderComponent } from "./screen-loader/screen-loader.component";
import { LoaderService } from "./loader.service";
import { InterceptorService } from "./interceptor.service";
import { NgProgressModule } from "@ngx-progressbar/core";
import { NgProgressHttpModule } from "@ngx-progressbar/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';
import { FacebookModule } from 'ngx-facebook';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderDirective } from './loader.directive';
import { SmallLoaderComponent } from './small-loader/small-loader.component';
import { LoaUploadComponent } from './loa-upload/loa-upload.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { GoogleAdComponent } from './google-ad/google-ad.component';
import { GoogleadThankyouComponent } from './googlead-thankyou/googlead-thankyou.component';
import { EnergyBrokerComponent } from './energy-broker/energy-broker.component';
import { ContactformComponent } from './contactform/contactform.component';
import { ContactThankyouComponent } from './contact-thankyou/contact-thankyou.component';
import { SendloaComponent } from './sendloa/sendloa.component';
import { EmailCampaignComponent } from './email-campaign/email-campaign.component';
import { LoaComponent } from './loa/loa.component';
import { InvoiceValidationComponent } from './invoice-validation/invoice-validation.component';
import { NetZeroCarbonReportingComponent } from './net-zero-carbon-reporting/net-zero-carbon-reporting.component';
import { VoidManagementComponent } from './void-management/void-management.component';
import { CustomerCareComponent } from './customer-care/customer-care.component';
import { EnergyProcurementTabComponent } from './energy-procurement-tab/energy-procurement-tab.component';
import { OurHeritageComponent } from './our-heritage/our-heritage.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { AccountManagementComponent } from './account-management/account-management.component';
import { NationalCharityTenderComponent } from './national-charity-tender/national-charity-tender.component';
import { EducationSectorComponent } from './education-sector/education-sector.component';
import { OurCustomersComponent } from './our-customers/our-customers.component';
import { EnergyReportComponent } from './energy-report/energy-report.component';

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
    WorkWithUsComponent,
    ContactComponent,
    RequestComponent,
    CaseStudyBlogComponent,
    CommunityBlogComponent,
    OurClientSayComponent,
    PrivacyPolicyComponent,
    EnviromentalPolicyComponent,
    BriberyActComponent,
    EngineComponent,
    ScreenLoaderComponent,
    LoaderDirective,
    SmallLoaderComponent,
    LoaUploadComponent,
    ThankyouComponent,
    ThankYouComponent,
    GoogleAdComponent,
    GoogleadThankyouComponent,
    EnergyBrokerComponent,
    ContactformComponent,
    ContactThankyouComponent,
    SendloaComponent,
    EmailCampaignComponent,
    LoaComponent,
    InvoiceValidationComponent,
    NetZeroCarbonReportingComponent,
    VoidManagementComponent,
    CustomerCareComponent,
    EnergyProcurementTabComponent,
    OurHeritageComponent,
    OurTeamComponent,
    AccountManagementComponent,
    NationalCharityTenderComponent,
    EducationSectorComponent,
    OurCustomersComponent,
    EnergyReportComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgProgressModule.withConfig({
      spinnerPosition: "left",
      color: "#3697c2"
    }),
    NgProgressHttpModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset, // <-- tell LazyLoadImage that you want to use scrollPreset
      // finally: ({ element }) => console.log('The image is loaded', element)
    }),
    FacebookModule.forRoot()
  ],
  providers: [
    LazyLoadScriptService,
    ServiceCallsService,
    DatePipe,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
