import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaserviceService } from '../metaservice.service';
import { ServiceCallsService } from '../service-calls.service';

@Component({
  selector: 'app-customer-care',
  templateUrl: './customer-care.component.html',
  styleUrls: ['./customer-care.component.css']
})
export class CustomerCareComponent implements OnInit {
  product
  producttext1
  text1
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
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Customer Care",
      "assets/logoUA.png",
      "customer-care"
    );
    this.meta.updateTitle("", "Customer Care");
  }

  getQuestions() {
    this.servicecalls
    .getServer("getCustomerCarePageData")
    .subscribe(
      (res: any) => {
        console.log("Res=>", res);
        this.product = res[0];
        var productText = this.product.txtEditor1;
        var productTextDec = decodeURIComponent(productText);
        this.producttext1 = productTextDec;
        this.producttext1 = this._sanitizer.bypassSecurityTrustHtml(this.producttext1);
        this.text1 = this.product.text1;
        },
        (error) => {
          console.log("error", error);
        }
      );
  }
}