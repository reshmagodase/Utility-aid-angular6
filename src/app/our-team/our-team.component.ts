import { Component, OnInit } from '@angular/core';
import { MetaserviceService } from '../metaservice.service';
import { ServiceCallsService } from '../service-calls.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  product
  text1
  constructor(
    private servicecalls: ServiceCallsService,
    private meta: MetaserviceService
  ) { 
    this.getTabs()
  }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "Fixed Price Strategy, Market Trigger Strategy, Portfolio Managed Strategy, Bespoke Strategy, Bureau Services",
      "Our Products",
      "assets/products.jpg",
      "our-products"
    );
    this.meta.updateTitle("", "Our Team");
  }

  getTabs() {
    this.servicecalls
      .getServer("getOurTeamPageData")
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
