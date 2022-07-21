import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MetaserviceService } from '../metaservice.service';
import { ServiceCallsService } from '../service-calls.service';

@Component({
  selector: 'app-national-charity-tender',
  templateUrl: './national-charity-tender.component.html',
  styleUrls: ['./national-charity-tender.component.css']
})
export class NationalCharityTenderComponent implements OnInit {
  contactUsForm: FormGroup;

  text1 = "Utility Aid is the UK's largest energy broker for the not-for-profit sector working with over 2,000 organisations and counting. Their dedicated team provide a high-level service to manage and maintain your utility portfolio. They understand that rising energy costs are a concern for most organisations right now and want to offer their advice and guidance through a collective purchasing offer."
  text2 = "Utility Aid manages energy 'baskets' containing thousands of properties across the UK. By grouping the energy consumption together, the basket participants benefit from considerable purchasing power. You have the opportunity to align your energy contracts to the next relevant date and basket in relation to your purchasing strategy and appetite for risk."
  text3 = "This is a strategic approach to tackle the current energy crisis. Short-term prices will be sky-high at the moment, so it will be more beneficial to spread the costs over a longer term now with the opportunity to automatically receive quotes from the National Charity Tender in the future."
  producttext1;
  product: any;
  tab: any;
  tabData: any;
  show: Boolean = false

  constructor(private fb: FormBuilder,
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer,
    private meta: MetaserviceService) {
    this.contactUsForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      comment: new FormControl('', [Validators.required]),
    });
    this.getTabs();
  }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "National Charity Tender",
      "National Charity Tender",
      "assets/products.jpg",
      "national-charity-tender"
    );
    this.meta.updateTitle("", "National Charity Tender");
  }

  onsubmit() {
    if (this.contactUsForm.valid) {
      this.servicecalls.postServer("sendContactMail", this.contactUsForm.value).subscribe((data: any) => {
        this.show = false;
        this.contactUsForm.reset();
      })
    } else {
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
      .getServer("getNationalCharityTenderData")
      .subscribe(
        (res: any) => {
          this.product = res[0];
          var productText = this.product.text4;
          this.text1 = this.product.text1;
          this.text2 = this.product.text2;
          this.text3 = this.product.text3;
          var productTextDec = decodeURIComponent(productText);
          this.producttext1 = productTextDec;
          this.producttext1 = this._sanitizer.bypassSecurityTrustHtml(this.producttext1);
          this.currentTabData("National Charity Tender");
        },
        error => {
          console.log("error", error);
        }
      );
  }

  open() {
    this.show = true;
  }
}
