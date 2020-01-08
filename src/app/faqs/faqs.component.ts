import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { DomSanitizer } from "@angular/platform-browser";
import { MetaserviceService } from "../metaservice.service";
@Component({
  selector: "app-faqs",
  templateUrl: "./faqs.component.html",
  styleUrls: ["./faqs.component.css"]
})
export class FAQsComponent implements OnInit {
  productdata: any;
  producttext: any;
  constructor(
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer,
    private meta: MetaserviceService
  ) {
    this.getQuestions();
  }

  ngOnInit() {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "FAQ",
      "assets/logoUA.png",
      "faq"
    );
    this.meta.updateTitle("", "FAQ");
  }
  getQuestions() {
    this.servicecalls
      .postServer("getProductList", { collection: "faq" })
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.productdata = res;
          var productText = this.productdata[0].product_text;
          console.log("Res=>", productText);

          var productTextDec = decodeURIComponent(productText);
          // this.producttext = productTextDec.replace(/\n/g, "<br />");
          this.producttext = productTextDec;
          this.producttext = this._sanitizer.bypassSecurityTrustHtml(
            this.producttext
          );
        },
        error => {
          console.log("error", error);
        }
      );
  }
}
