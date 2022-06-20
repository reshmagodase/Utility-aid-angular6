import { Component, OnInit } from '@angular/core';
import { MetaserviceService } from '../metaservice.service';
import { ServiceCallsService } from '../service-calls.service';

@Component({
  selector: 'app-energy-procurement-tab',
  templateUrl: './energy-procurement-tab.component.html',
  styleUrls: ['./energy-procurement-tab.component.css']
})
export class EnergyProcurementTabComponent implements OnInit {
  data: any;
  text: any;
  text1: any;
  text2: any;
  text3: any;
  constructor(private servicecalls: ServiceCallsService, private meta: MetaserviceService) {
    this.getText2();
  }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "Energy Procurement",
      "Energy Procurement",
      "assets/products.jpg",
      "energy-procurement"
    );
    this.meta.updateTitle("", "Energy Procurement");
  }

  getText2() {
    this.servicecalls
      .postServer("getProductList", { collection: "whyua" })
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.data = res;
          var titleHeading = this.data[0].titletext;
          var textHeadingDec = decodeURIComponent(titleHeading);
          console.log("Res=>", textHeadingDec);
          this.text = textHeadingDec.replace(/\n/g, "<br />");

          var titleOne = this.data[0].text1;
          var textOneDec = decodeURIComponent(titleOne);
          console.log("Res=>", textOneDec);
          this.text1 = textOneDec.replace(/\n/g, "<br />");

          var titleTwo = this.data[0].text2;
          var textTwoDec = decodeURIComponent(titleTwo);
          console.log("Res=>", textTwoDec);
          this.text2 = textTwoDec.replace(/\n/g, "<br />");

          var titleThree = this.data[0].text3;
          var textThreeDec = decodeURIComponent(titleThree);
          console.log("Res=>", textThreeDec);
          this.text3 = textThreeDec.replace(/\n/g, "<br />");
        },
        error => {
          console.log("error", error);
        }
      );
  }
}