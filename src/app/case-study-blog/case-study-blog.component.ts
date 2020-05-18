import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { RouteConfigLoadEnd, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { MetaserviceService } from "../metaservice.service";
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
    protected _sanitizer: DomSanitizer,
    private meta: MetaserviceService
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
        this.casestudy.image1 = this.casestudy.image1.replace(/ /g, "%20");
        this.casestudy.image2 = this.casestudy.image2.replace(/ /g, "%20");
        this.casestudy.image3 = this.casestudy.image3.replace(/ /g, "%20");
        console.log('this.casestudy.image1', this.casestudy.image1);
        var author = this.casestudy.banner_title;
        var textDec = decodeURIComponent(author);
        this.bannerTitle = textDec;
        this.bannerTitle = this._sanitizer.bypassSecurityTrustHtml(
          this.bannerTitle
        );
        this.meta.updateMetaInfo(
          "",
          this.casestudy.title,
          "contact.jpg",
          this.casestudy.slug
        );
        this.meta.updateTitle("", this.casestudy.title);
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
