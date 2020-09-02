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
export class AppRoutingModule {}
