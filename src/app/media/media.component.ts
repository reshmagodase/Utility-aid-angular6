import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { Router } from "@angular/router";
import { MetaserviceService } from "../metaservice.service";
import { Meta } from "@angular/platform-browser";
@Component({
  selector: "app-media",
  templateUrl: "./media.component.html",
  styleUrls: ["./media.component.css"]
})
export class MediaComponent implements OnInit {
  news: any;
  list1: any;
  constructor(
    private servicecalls: ServiceCallsService,
    private router: Router,
    private meta: MetaserviceService
  ) {
    this.getNews();
  }

  ngOnInit() {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Media",
      "assets/news.jpg",
      "media"
    );
    this.meta.updateTitle("", "Media");
  }
  getNews() {
    this.servicecalls.postServer("getNewsList", {}).subscribe(
      (res: any) => {
        console.log("Res=>", res);
        this.news = res;
        for (let i = 0; i < this.news.length; i++) {
          this.news[i].description = this.news[i].description
            .split("\n")
            .join("<br />");

          this.news[i].description = this.news[i].description.replace(
            /utilityAid/g,
            "https://utility-aid.co.uk/utilityAid"
          );
        }

        // console.log(this.news[0].description.split("\n").join("<br />"));
      },
      error => {
        console.log("error", error);
      }
    );
  }

  headingTitle(list) {
    let title = list.heading.replace(/ /g, "_");
    let newsDate = list.newsdate;
    this.router.navigate(["media/news-media", title, newsDate]);
  }
}
