import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MetaserviceService } from '../metaservice.service';
import { ServiceCallsService } from '../service-calls.service';

@Component({
  selector: 'app-net-zero-carbon-reporting',
  templateUrl: './net-zero-carbon-reporting.component.html',
  styleUrls: ['./net-zero-carbon-reporting.component.css']
})
export class NetZeroCarbonReportingComponent implements OnInit {

  txtEditor1
  txtEditor2
  txtEditor3
  txtEditor4
  txtEditor5
  text1

  producttext1;
  producttext2;
  producttext3;
  producttext4;
  producttext5;

  product: any;
  tab: any;
  tabData: any;
  tabData2: any;
  contactUsForm: FormGroup;
  show: Boolean = false
  constructor(
    private fb: FormBuilder,
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer,
    private meta: MetaserviceService
  ) {
    this.getTabs();
  }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "Net Zero and Carban Reporting",
      "Net Zero and Carban Reporting",
      "assets/products.jpg",
      "net-zero-carban-reporting"
    );
    this.meta.updateTitle("", "Net Zero and Carban Reporting");
    this.initForm();
  }

  initForm() {
    this.contactUsForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', [Validators.required]),
    });
  }

  onsubmit() {
    console.log("form value", this.contactUsForm.value);
    if (this.contactUsForm.valid) {
      console.log("form value", this.contactUsForm.value);
      this.servicecalls.postServer("sendNetZeroContact", this.contactUsForm.value).subscribe((data: any) => {
        console.log(data);
        this.show = true;
        this.contactUsForm.reset();
      })
    } else {
      console.log("---->", Object.keys(this.contactUsForm.controls))
      let lng = Object.keys(this.contactUsForm.controls)
      for (let i = 0; i < lng.length; i++) {

        if (this.contactUsForm.controls[lng[i]].status == 'INVALID') {
          this.contactUsForm.controls[lng[i]].markAsDirty();
        }
      }
    }
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
      .getServer("getNetZeroPageData")
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
          this.currentTabData("Net Zero and Carban Reporting");
        },
        error => {
          console.log("error", error);
        }
      );
  }

  open() {
    this.show = false;
  }

}
