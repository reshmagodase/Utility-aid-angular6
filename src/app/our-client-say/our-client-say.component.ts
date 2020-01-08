import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { MetaserviceService } from "../metaservice.service";
@Component({
  selector: "app-our-client-say",
  templateUrl: "./our-client-say.component.html",
  styleUrls: ["./our-client-say.component.css"]
})
export class OurClientSayComponent implements OnInit {
  partnerlist: any;
  constructor(
    private servicecalls: ServiceCallsService,
    private meta: MetaserviceService
  ) {
    this.getPartnerList();
  }

  ngOnInit() {
    this.meta.updateMetaInfo(
      "Going through the energy audit process with Utility Aid has been extremely useful.It not only highlighted the savings to be made but saved us valuable time.",
      "Our Clients Say",
      "assets/our-client-say.jpg",
      "our-client-say"
    );
    this.meta.updateTitle("", "Our Clients Say");
  }
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
