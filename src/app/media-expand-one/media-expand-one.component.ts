import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { RouteConfigLoadEnd, ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-media-expand-one",
  templateUrl: "./media-expand-one.component.html",
  styleUrls: ["./media-expand-one.component.css"]
})
export class MediaExpandOneComponent implements OnInit {
  details: any;
  heading: any;
  list1: any;
  constructor(
    private route: ActivatedRoute,
    private servicecalls: ServiceCallsService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.heading = params["header"];

      this.getNewsDetails(params["header"]);
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
          let list = this.details.description;

          this.list1 = list.replace(/\n/g, "<br />");
        },
        error => {
          console.log("error", error);
        }
      );
  }
}
