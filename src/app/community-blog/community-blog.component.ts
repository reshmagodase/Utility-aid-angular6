import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { RouteConfigLoadEnd, ActivatedRoute } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";
import { MetaserviceService } from "../metaservice.service";
declare var $: any;
@Component({
  selector: "app-community-blog",
  templateUrl: "./community-blog.component.html",
  styleUrls: ["./community-blog.component.css"]
})
export class CommunityBlogComponent implements OnInit {
  community: any = [];
  community1: any = [];
  author1: any = [];
  editorChange: any;
  imagePath: any;
  Author: any[];
  Article: any[];
  slug: any;
  constructor(
    private route: ActivatedRoute,
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer,
    private meta: MetaserviceService
  ) {
    // this.getBlog();
    this.route.params.subscribe(params => {
      console.log(new Date(params["date"]));
      this.slug = params["slug"];
      this.getblogs(params["slug"]);
      this.getAuthorDetails();
      this.getAuthor();
    });
  }

  ngOnInit() {
    this.meta.updateMetaInfo(
      "",
      this.community.page_content_extended_title,
      "contact.jpg",
      this.community.slug
    );
    this.meta.updateTitle("", this.community.page_content_extended_title);
  }

  getblogs(slug) {
    this.servicecalls.postServer("getBlogList", { slug: slug }).subscribe(
      (res: any) => {
        console.log("Res=>", res[0]);
        this.community = res[0];
        // debugger;
        //this.imagePath = "https://utility-aid.co.uk/" + this.community.image1;

        let editor = this.community.editor1;
        let editorone = editor.replace(
          /utilityAid/g,
          "https://utility-aid.co.uk/utilityAid"
        );
        console.log(editorone);

        this.editorChange = editorone;
        this.editorChange = this._sanitizer.bypassSecurityTrustHtml(
          this.editorChange
        );
        $("#editor1")
        .find("*")
        .removeAttr("style");
      },
      error => {
        console.log("error", error);
      }
    );
  }

  getAuthorDetails() {
    this.servicecalls.postServer("getBlogList", { active: "on" }).subscribe(
      (res: any) => {
        console.log("Res=>", res[0]);
        this.community1 = res[0];
        this.Article = res.slice(0, 3);
        for (var k = 0; k < this.Article.length; k++) {
          if (this.Article[k].slug == this.slug) {
            this.Article.splice(k, 1);
            console.log("asfsaf", this.Article);
          }
        }
        this.meta.updateTitle("", this.community.title);

        if (this.Article.length == 3) {
          this.Article.splice(2, 1);
        }
        console.log("asfsaf111111111111111111", this.Article);
      },
      error => {
        console.log("error", error);
      }
    );
  }

  getAuthor() {
    this.servicecalls.getServer("getAuthorList").subscribe((response: any) => {
      console.log("response=>", response);
      this.author1 = response;
      //this.Author = [];
      let authorList = this.community.author;
      // console.log(authorList);
      for (let i = 0; i < this.author1.length; i++) {
        // console.log(this.author1[i]);
        if (this.author1[i]._id == authorList) {
          this.Author.push(this.author1[i]);
          // console.log("author=>", this.author1[i]);
        }
      }
    });
  }
}
