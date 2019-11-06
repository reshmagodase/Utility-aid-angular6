import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { DomSanitizer } from "@angular/platform-browser";
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
    protected _sanitizer: DomSanitizer
  ) {
    this.getQuestions();
  }

  ngOnInit() {}
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
