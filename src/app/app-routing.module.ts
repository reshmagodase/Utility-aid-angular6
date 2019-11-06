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

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "our-client-say", component: OurClientSayComponent },
  { path: "whyutilityaid", component: WhyutilityaidComponent },
  { path: "ourproducts", component: OurproductsComponent },
  { path: "domestic-energy", component: DomesticEnergyComponent },
  { path: "advisory-board", component: AdvisoryBoardComponent },
  { path: "customer-stories", component: CustomerStoriesComponent },
  { path: "faqs", component: FAQsComponent },
  {
    path: "media",
    loadChildren: () =>
      import("./media/media.module").then(mod => mod.MediaModule)
  },

  { path: "work-with-us", component: WorkWithUsComponent },
  { path: "contact", component: ContactComponent },
  { path: "request", component: RequestComponent },
  { path: "case-study-blog/:slug", component: CaseStudyBlogComponent },
  { path: "community-blog", component: CommunityBlogComponent },
  { path: "privacy-policy", component: PrivacyPolicyComponent },
  { path: "enviromental-policy", component: EnviromentalPolicyComponent },
  { path: "bribery-act", component: BriberyActComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
