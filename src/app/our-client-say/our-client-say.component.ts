import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
@Component({
  selector: "app-our-client-say",
  templateUrl: "./our-client-say.component.html",
  styleUrls: ["./our-client-say.component.css"]
})
export class OurClientSayComponent implements OnInit {
  partnerlist: any;
  constructor(private servicecalls: ServiceCallsService) {
    this.getPartnerList();
  }

  ngOnInit() {}
  getPartnerList() {
    this.servicecalls.postServer("getPartnerList", { active: "on" }).subscribe(
      (res: any) => {
        console.log("Res=>", res);
        this.partnerlist = res;

        // var partnerImg = this.partnerlist[0].image1;
        // var img = img.attr("src", "partnerlist.partnerImg");
        // console.log(img);
      },
      error => {
        console.log("error", error);
      }
    );
  }
}
