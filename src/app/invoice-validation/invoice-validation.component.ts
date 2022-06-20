import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MetaserviceService } from '../metaservice.service';
import { ServiceCallsService } from '../service-calls.service';

@Component({
  selector: 'app-invoice-validation',
  templateUrl: './invoice-validation.component.html',
  styleUrls: ['./invoice-validation.component.css']
})
export class InvoiceValidationComponent implements OnInit {
  txtEditor1 
  txtEditor2 
  txtEditor3 
  txtEditor4 
  txtEditor5 

  producttext1: any
  producttext2: any
  producttext3: any
  producttext4: any
  producttext5: any

  text1 
  text2
  text3 

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
      "Invoice Validation",
      "Invoice Validation",
      "assets/products.jpg",
      "invoice-validation"
    );
    this.meta.updateTitle("", "Invoice Validation");
  }

  currentTabData(list) {
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].heading == list) {
        this.tab = this.product[i];
        let tab1 = this.tab.product_text;
        this.tabData = decodeURIComponent(tab1);
        this.tabData = this._sanitizer.bypassSecurityTrustHtml(this.tabData);
        console.log("tabData", this.tabData)
        break;
      }
    }
  }

  getTabs() {
    this.servicecalls
      .getServer("getInvoiceValidationPageData")
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.product = res[0];
          var productText = this.product.txtEditor1;
          var productTextDec = decodeURIComponent(productText);
          this.producttext1 = productTextDec;
          this.producttext1 = this._sanitizer.bypassSecurityTrustHtml(this.producttext1);

          var productText1 = this.product.txtEditor2;
          var productTextDec = decodeURIComponent(productText1);
          this.producttext2 = productTextDec;
          this.producttext2 = this._sanitizer.bypassSecurityTrustHtml(this.producttext2);

          var productText2= this.product.txtEditor3;
          var productTextDec = decodeURIComponent(productText2);
          this.producttext3 = productTextDec;
          this.producttext3 = this._sanitizer.bypassSecurityTrustHtml(this.producttext3);

          var productText3 = this.product.txtEditor4;
          var productTextDec = decodeURIComponent(productText3);
          this.producttext4 = productTextDec;
          this.producttext4 = this._sanitizer.bypassSecurityTrustHtml(this.producttext4);

          var productText4 = this.product.txtEditor5;
          var productTextDec = decodeURIComponent(productText4  );
          this.producttext5 = productTextDec;
          this.producttext5 = this._sanitizer.bypassSecurityTrustHtml(this.producttext5);
          this.text1 = this.product.text1;
          this.text2 = this.product.text2;
          this.text3 = this.product.text3;
          this.currentTabData("Fixed Price Strategy");
        },
        error => {
          console.log("error", error);
        }
      );
  }
}
