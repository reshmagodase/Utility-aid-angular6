import { Component, OnInit, ViewChild } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { DomSanitizer } from "@angular/platform-browser";
import { MetaserviceService } from "../metaservice.service";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
@Component({
  selector: "app-faqs",
  templateUrl: "./faqs.component.html",
  styleUrls: ["./faqs.component.css"],
})
export class FAQsComponent implements OnInit {
  productdata: any;
  producttext: any;
  active_fragment: any;
  constructor(
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer,
    private meta: MetaserviceService,
    private readonly route: ActivatedRoute,
    private router: Router
  ) {
    this.getQuestions();
  }

  ngOnInit() {
    this.route.fragment.subscribe((frag) => {
      this.active_fragment = frag;
      console.log("this.active_fragment", this.active_fragment);
      // let e = document.getElementById(this.active_fragment);
      // if (e) {
      //   e.scrollIntoView({ behavior: "smooth", block: "start" });
      // }
    });
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "FAQ",
      "assets/logoUA.png",
      "faq"
    );
    this.meta.updateTitle("", "FAQ");
  }

  ngAfterViewInit(): void {
    try {
        if(this.active_fragment) {
      // document.querySelector("#" + this.active_fragment).scrollIntoView({ behavior: "smooth", block: "end",inline: "nearest" });
      const id = this.active_fragment;
      const yOffset = -100;
      const element = document.getElementById(id);
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        console.log("in try",y);
        if(y>300) {
          window.scrollTo(0, 500)
        }
       
        }
      

      // window.scrollBy(0,1000);
     
      // window.scrollTo(0,document.body.scrollHeight);
    } catch (e) {
      console.log("in catch", e);
    }
  }

  getQuestions() {
    this.servicecalls
      .postServer("getProductList", { collection: "faq" })
      .subscribe(
        (res: any) => {
          // console.log("Res=>", res);
          this.productdata = res;
          var productText = this.productdata[0].product_text;
          // console.log("Res=>", productText);

          var productTextDec = decodeURIComponent(productText);
          // this.producttext = productTextDec.replace(/\n/g, "<br />");
          this.producttext = productTextDec;
          this.producttext = this._sanitizer.bypassSecurityTrustHtml(
            this.producttext
          );
        },
        (error) => {
          console.log("error", error);
        }
      );
  }
}
