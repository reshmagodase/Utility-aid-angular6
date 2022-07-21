import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MetaserviceService } from '../metaservice.service';
import { ServiceCallsService } from '../service-calls.service';

@Component({
  selector: 'app-education-sector',
  templateUrl: './education-sector.component.html',
  styleUrls: ['./education-sector.component.css']
})
export class EducationSectorComponent implements OnInit {
  product: any;
  text1: any;
  text2: any;
  text3: any;

  constructor(private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer,
    private meta: MetaserviceService) { }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "Education Sector",
      "Education Sector",
      "assets/products.jpg",
      "education-sector"
    );
    this.meta.updateTitle("", "Education Sector");

    this.getTabs();
  }

  getTabs() {
    this.servicecalls
      .getServer("getEducationSectorData")
      .subscribe(
        (res: any) => {
          this.product = res[0];
          var productText = this.product.text4;
          this.text1 = this.product.text1;
          this.text2 = this.product.text2;
          this.text3 = this.product.text3;
        },
        error => {
          console.log("error", error);
        }
      );
  }

}
