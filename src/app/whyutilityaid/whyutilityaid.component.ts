import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { DatePipe } from "@angular/common";
@Component({
  selector: "app-whyutilityaid",
  templateUrl: "./whyutilityaid.component.html",
  styleUrls: ["./whyutilityaid.component.css"]
})
export class WhyutilityaidComponent implements OnInit {
  data: any;
  text: any;
  text1: any;
  text2: any;
  text3: any;
  dataBlog: any;
  blogDate: any;
  date: any;

  constructor(
    private servicecalls: ServiceCallsService,
    public datepipe: DatePipe
  ) {
    this.getText2();
    this.getBlog();
  }

  ngOnInit() {}
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

  getBlog() {
    this.servicecalls.postServer("getBlogList", { active: "on" }).subscribe(
      (res: any) => {
        console.log("Res=>", res);
        this.dataBlog = res;
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
