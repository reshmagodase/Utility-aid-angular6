import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { RouteConfigLoadEnd, ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer, Meta } from "@angular/platform-browser";
import { MetaserviceService } from "../metaservice.service";
import { FacebookService, InitParams, UIParams, UIResponse } from 'ngx-facebook';

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
  url: any;
  constructor(
    private route: ActivatedRoute,
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer,
    private meta: MetaserviceService,
    public fb: FacebookService,
    private router: Router,
    private meta1: Meta
  ) {
    // this.getBlog();
    console.log('-----------url', this.router.url);
    this.url = this.router.url;
    this.route.params.subscribe(params => {
      console.log(new Date(params["date"]));
      this.slug = params["slug"];
      this.getblogs(params["slug"]);
      this.getAuthorDetails();
      this.getAuthor();
    });


    let initParams: InitParams = {
      appId: '1073804676025156',
      xfbml: true,
      version: 'v2.8'
    };

    fb.init(initParams);
  }

  ngOnInit() {
    // this.meta.updateMetaInfo(
    //   "",
    //   this.community.page_content_extended_title,
    //   "contact.jpg",
    //   this.community.slug
    // );
    // this.meta.updateTitle("", this.community.page_content_extended_title);
  }

  getblogs(slug) {
    this.servicecalls.postServer("getBlogList", { slug: slug }).subscribe(
      (res: any) => {
        console.log("Res=>", res[0]);
        this.community = res[0];
        var s1 = this.url;
        var s2 = s1.substr(1);
        this.meta.updateMetaInfo(
          this.community.meta_data_meta_description,
          this.community.title,
          this.community.image1,
          s2
        );
        this.meta.updateTitle("", this.community.title);
        this.meta.updateOgUrl(this.url);
        this.meta.updateDescription(this.community.meta_data_meta_description);
        this.meta.updateOGtags(this.community.title);
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

  fbShare() {
    var loc = window.location.href;
    console.log('loc', loc);
    var title = "UA | " + this.community.title;
    var summary = this.community.meta_data_meta_description;
    var thumbImage = "https://www.utility-aid.co.uk/" + this.community.image1;
    this.meta1.updateTag({ property: 'og:type', content: 'website' });
    this.meta1.updateTag({ property: 'og:site_name', content: 'https://www.utility-aid.co.uk/' });
    this.meta1.updateTag({ property: 'og:title', content: title });
    this.meta1.updateTag({ property: 'og:description', content: summary });
    this.meta1.updateTag({ property: 'og:image', content: thumbImage });
    // let params: UIParams = {
    //   display: 'popup',
    //   href: loc,
    //   method: 'feed',
    //   name: title,
    //   picture: thumbImage,
    //   caption: title,
    //   description: summary,
    //   message: "",
    //   redirect_uri: loc

    // };
    // console.log("params",params);
    const params: UIParams = {
      method: 'share_open_graph',
      action_type: 'og.shares',
      action_properties: JSON.stringify({
        object: {
          'og:display': 'popup',
          'og:href': loc,
          "og:method": 'feed',
          "og:name": title,
          // "og:picture": thumbImage,
          "og:caption": title,
          "og:description": summary,
          "og:message": "",
          "og:redirect_uri": loc,
          'og:url': loc,
          'og:title': title,
          // 'og:description': 'OG Description',
          'og:image': thumbImage,
          'og:image:width': '1200',
          'og:image:height': '630',
          'og:image:type': 'image/jpeg'
        }
      })
    }
    setTimeout(() => {


      this.fb.ui(params)
        .then((res: UIResponse) => console.log(res))
        .catch((e: any) => console.error(e));
    }, 500);



  }

  twitterShare() {
    var loctw = window.location.href;
    var titletw = this.community.title;
    console.log('loctw', window.location)
    window.open(
      "https://twitter.com/share?url=" + loctw + "&text=" + titletw,
      "twitterwindow",
      "height=450, width=550, top=" +
      ($(window).height() / 2 - 225) +
      ", left=" +
      $(window).width() / 2 +
      ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"
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
