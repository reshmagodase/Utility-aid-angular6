import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
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
import { CaseStudyBlogComponent } from "./case-study-blog/case-study-blog.component";
import { CommunityBlogComponent } from "./community-blog/community-blog.component";
import { OurClientSayComponent } from "./our-client-say/our-client-say.component";
import { PrivacyPolicyComponent } from "./privacy-policy/privacy-policy.component";
import { EnviromentalPolicyComponent } from "./enviromental-policy/enviromental-policy.component";
import { BriberyActComponent } from "./bribery-act/bribery-act.component";
import { EngineComponent } from "./engine/engine.component";
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
import { CustomerCareComponent } from "./customer-care/customer-care.component";
import { EnergyProcurementTabComponent } from "./energy-procurement-tab/energy-procurement-tab.component";
import { InvoiceValidationComponent } from "./invoice-validation/invoice-validation.component";
import { NetZeroCarbonReportingComponent } from "./net-zero-carbon-reporting/net-zero-carbon-reporting.component";
import { VoidManagementComponent } from "./void-management/void-management.component";
import { OurHeritageComponent } from "./our-heritage/our-heritage.component";
import { OurTeamComponent } from "./our-team/our-team.component";
import { AccountManagementComponent } from "./account-management/account-management.component";
import { NationalCharityTenderComponent } from './national-charity-tender/national-charity-tender.component';
import { EducationSectorComponent } from "./education-sector/education-sector.component";
import { OurCustomersComponent } from "./our-customers/our-customers.component";
import { EnergyReportComponent } from "./energy-report/energy-report.component";
const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "our-client-say",
    component: OurClientSayComponent
  },
  {
    path: "why-ua",
    component: WhyutilityaidComponent
  },
  {
    path: "why-ua/#id",
    component: WhyutilityaidComponent
  },
  {
    path: "our-products",
    component: OurproductsComponent
  },
  {
    path: "energyswitching",
    component: DomesticEnergyComponent
  },
  {
    path: "advisory-board",
    component: AdvisoryBoardComponent
  },
  {
    path: "our-heritage",
    component: OurHeritageComponent
  },
  {
    path: "our-team",
    component: OurTeamComponent
  },
  {
    path: "case-studies",
    component: CustomerStoriesComponent
  },
  {
    path: "faq",
    component: FAQsComponent
  },
  {
    path: "media",
    loadChildren: () =>
      import("./media/media.module").then(mod => mod.MediaModule)
  },

  {
    path: "workwithus",
    component: WorkWithUsComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "request",
    component: RequestComponent
  },
  {
    path: "case-study-blog/:slug",
    component: CaseStudyBlogComponent
  },
  { path: "blog/:y/:m/:d/:slug", component: CommunityBlogComponent },
  {
    path: "privacy-policy",
    component: PrivacyPolicyComponent
  },
  {
    path: "enviromental-policy",
    component: EnviromentalPolicyComponent
  },
  {
    path: "bribery-act",
    component: BriberyActComponent
  },
  {
    path: "engine",
    component: EngineComponent
  },
  {
    path: "loa-upload",
    component: LoaUploadComponent
  },
  {
    path: "thankyou-upload-loa",
    component: ThankyouComponent
  },
  {
    path: "thank-you",
    component: ThankYouComponent
  },
  {
    path: "google-ad",
    component: GoogleAdComponent
  },
  {
    path: "thankyou-ad",
    component: GoogleadThankyouComponent
  },
  {
    path: "energy-broker",
    component: EnergyBrokerComponent
  },
  {
    path: "contactform/:query",
    component: ContactformComponent
  },
  {
    path: "contactform",
    component: ContactformComponent
  },
  {
    path: "thankyou-contact",
    component: ContactThankyouComponent
  },
  {
    path: "sendloa",
    component: SendloaComponent
  },
  {
    path: "success",
    component: EmailCampaignComponent
  },
  {
    path: "addtocall",
    component: LoaComponent
  },
  {
    path: "energy-procurement",
    component: EnergyProcurementTabComponent
  },
  {
    path: "invoice-validation",
    component: InvoiceValidationComponent
  },
  {
    path: "net-zero-carbon-reporting",
    component: NetZeroCarbonReportingComponent
  },
  {
    path: "void-management",
    component: VoidManagementComponent
  },
  {
    path: "customer-care",
    component: CustomerCareComponent
  },
  {
    path: "account-management",
    component: AccountManagementComponent
  },
  {
    path: "national-charity-tender",
    component: NationalCharityTenderComponent
  },
  {
    path: "education-sector",
    component: EducationSectorComponent
  },
  {
    path: "our-customer",
    component: OurCustomersComponent
  },
  {
    path: "energy-report",
    component: EnergyReportComponent
  },
  { path: '**', redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'enabled'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
