import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.css"]
})
export class MediaComponent implements OnInit {
  news: any;

  constructor(
    private servicecalls: ServiceCallsService,
    private router: Router
  ) {
    this.getNews();
  }

  ngOnInit() {}
  getNews() {
    this.servicecalls.postServer("getNewsList", {}).subscribe(
      (res: any) => {
        console.log("Res=>", res);
        this.news = res;
      },
      error => {
        console.log("error", error);
      }
    );
  }

  headingTitle(list) {
    this.router.navigate(["media/media-expand-one", { header: list.heading }]);
  }
}
