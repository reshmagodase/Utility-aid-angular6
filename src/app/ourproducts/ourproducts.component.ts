import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-ourproducts",
  templateUrl: "./ourproducts.component.html",
  styleUrls: ["./ourproducts.component.css"]
})
export class OurproductsComponent implements OnInit {
  product: any;
  tab: any;
  tabData: any;
  tabData2: any;
  constructor(
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer
  ) {
    this.getTabs();
  }

  ngOnInit() {}

  currentTabData(list) {
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].heading == list) {
        this.tab = this.product[i];
        let tab1 = this.tab.product_text;
        this.tabData = decodeURIComponent(tab1);
        this.tabData = this._sanitizer.bypassSecurityTrustHtml(this.tabData);
        break;
      }
    }
  }

  getTabs() {
    this.servicecalls
      .postServer("getProductList", { collection: "products" })
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.product = res;
          this.currentTabData("Fixed Price Strategy");
        },
        error => {
          console.log("error", error);
        }
      );
  }
}
