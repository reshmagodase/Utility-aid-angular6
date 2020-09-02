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
    ThankyouComponent
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
