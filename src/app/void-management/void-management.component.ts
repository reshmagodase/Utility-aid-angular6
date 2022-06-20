import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MetaserviceService } from '../metaservice.service';
import { ServiceCallsService } from '../service-calls.service';

@Component({
  selector: 'app-void-management',
  templateUrl: './void-management.component.html',
  styleUrls: ['./void-management.component.css']
})
export class VoidManagementComponent implements OnInit {

  txtEditor
  txtEditor1
  txtEditor2
  text1
  producttext: any
  producttext1: any
  producttext2: any

  product: any;
  tab: any;
  tabData: any;
  tabData2: any;
  constructor(
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer,
    private meta: MetaserviceService
  ) {
    this.getTabs();
  }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "Void Management Service",
      "Void Management Service",
      "assets/products.jpg",
      "void-management"
    );
    this.meta.updateTitle("", "Void Management Service");
  }

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
      .getServer("getVoidManagementServicePageData")
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.product = res[0];

          var productText = this.product.txtEditor;
          var productTextDec = decodeURIComponent(productText);
          this.producttext = productTextDec;
          this.producttext = this._sanitizer.bypassSecurityTrustHtml(this.producttext);

          var productText = this.product.txtEditor1;
          var productTextDec = decodeURIComponent(productText);
          this.producttext1 = productTextDec;
          this.producttext1 = this._sanitizer.bypassSecurityTrustHtml(this.producttext1);

          var productText1 = this.product.txtEditor2;
          var productTextDec = decodeURIComponent(productText1);
          this.producttext2 = productTextDec;
          this.producttext2 = this._sanitizer.bypassSecurityTrustHtml(this.producttext2);

          this.text1 = this.product.text1;
          this.currentTabData("Void Management Service");
        },
        error => {
          console.log("error", error);
        }
      );
  }
}