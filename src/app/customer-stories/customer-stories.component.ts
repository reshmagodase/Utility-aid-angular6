import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
@Component({
  selector: "app-customer-stories",
  templateUrl: "./customer-stories.component.html",
  styleUrls: ["./customer-stories.component.css"]
})
export class CustomerStoriesComponent implements OnInit {
  blogdata: any;
  partnerlist: any;
  constructor(private servicecalls: ServiceCallsService) {
    this.getBlogInfo();
    this.getPartnerList();
  }

  ngOnInit() {}
  getBlogInfo() {
    this.servicecalls
      .postServer("getCaseStudyList", { active: "on" })
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.blogdata = res;
        },
        error => {
          console.log("error", error);
        }
      );
  }

  getPartnerList() {
    this.servicecalls.postServer("getPartnerList", { active: "on" }).subscribe(
      (res: any) => {
        console.log("Res=>", res);
        this.partnerlist = res;

        // var partnerImg = this.partnerlist[0].image1;
        // var img = img.attr("src", "partnerlist.partnerImg");
        // console.log(img);
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
