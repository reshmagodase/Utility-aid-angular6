import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { RouteConfigLoadEnd, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-case-study-blog",
  templateUrl: "./case-study-blog.component.html",
  styleUrls: ["./case-study-blog.component.css"]
})
export class CaseStudyBlogComponent implements OnInit {
  casestudy: any = [];
  case: any = [];
  bannerTitle: any;

  constructor(
    private route: ActivatedRoute,
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getblogs(params["slug"]);
    });
  }
  getblogs(slug) {
    this.servicecalls.postServer("getCaseStudyList", { slug: slug }).subscribe(
      (res: any) => {
        console.log("Res=>", res[0]);
        this.casestudy = res[0];

        var author = this.casestudy.banner_title;
        var textDec = decodeURIComponent(author);
        this.bannerTitle = textDec;
        this.bannerTitle = this._sanitizer.bypassSecurityTrustHtml(
          this.bannerTitle
        );
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
