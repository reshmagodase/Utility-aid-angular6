import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { RouteConfigLoadEnd, ActivatedRoute } from "@angular/router";
import { MetaserviceService } from "../metaservice.service";
@Component({
  selector: "app-media-expand-one",
  templateUrl: "./media-expand-one.component.html",
  styleUrls: ["./media-expand-one.component.css"]
})
export class MediaExpandOneComponent implements OnInit {
  details: any;
  heading: any;
  list1: any;
  newdate: any;
  constructor(
    private route: ActivatedRoute,
    private servicecalls: ServiceCallsService,
    private meta: MetaserviceService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.heading = params["title"];
      // this.route.params.subscribe((params: Params) => this.myParam = params['caller']
      this.newdate = params["newsDate"];
      this.getNewsDetails(params["title"]);
    });
  }
  getNewsDetails(heading) {
    this.servicecalls
      .postServer("getNewsDetails", {
        heading: heading
      })
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.details = res;
          // this.details.description = this.details.description.replace(
          //   /utilityAid/g,
          //   "https://utility-aid.co.uk/utilityAid"
          // );
          let list = this.details.description.replace(
            /utilityAid/g,
            "https://utility-aid.co.uk/utilityAid"
          );

          this.list1 = list.replace(/\n/g, "<br />");

          // this.meta.updateMetaInfo(
          //   this.list1,
          //   this.details.heading,
          //   "contact.jpg",
          //   "environmental-policy"
          // );
          this.meta.updateTitle("", this.details.heading);
          this.meta.updateMetaInfo(
            this.list1,
            this.details.heading,
            this.details.image,
            "news-media/" + this.heading + "/" + this.details.newsdate
          );
        },

        error => {
          console.log("error", error);
        }
      );
  }
}
