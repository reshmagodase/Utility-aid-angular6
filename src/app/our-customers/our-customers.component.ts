import { Component, OnInit } from '@angular/core';
import { MetaserviceService } from '../metaservice.service';
import { ServiceCallsService } from '../service-calls.service';

@Component({
  selector: 'app-our-customers',
  templateUrl: './our-customers.component.html',
  styleUrls: ['./our-customers.component.css']
})
export class OurCustomersComponent implements OnInit {
  product: any;

  constructor(
    private servicecalls: ServiceCallsService,
    private meta: MetaserviceService
  ) {
    this.getTabs()
  }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "Fixed Price Strategy, Market Trigger Strategy, Portfolio Managed Strategy, Bespoke Strategy, Bureau Services",
      "Our Customer",
      "assets/products.jpg",
      "our-customer"
    );
    this.meta.updateTitle("", "Our Customer");
  }

  getTabs() {
    this.servicecalls
      .getServer("getReviewPageData")
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.product = res;
        },
        error => {
          console.log("error", error);
        }
      );
  }

}
