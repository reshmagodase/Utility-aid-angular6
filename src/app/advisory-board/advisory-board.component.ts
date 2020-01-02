import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { MetaserviceService } from "../metaservice.service";
@Component({
  selector: "app-advisory-board",
  templateUrl: "./advisory-board.component.html",
  styleUrls: ["./advisory-board.component.css"]
})
export class AdvisoryBoardComponent implements OnInit {
  person: any;
  constructor(
    private servicecalls: ServiceCallsService,
    private meta: MetaserviceService
  ) {
    this.getadvisory();
  }

  ngOnInit() {
    this.meta.updateMetaInfo(
      "UA is proud to be the only energy broker in the UK that employs an Independent Advisory Panel. The panel is there for the benefit of customers requiring advisory services relating to a range of topics including Ethics, Regulation, Lobbying, Trading, Volume Purchasing, Fixed and Flexible products and Exotic Instruments.",
      "Advisory Board",
      "contact.jpg",
      "advisory-board"
    );
    this.meta.updateTitle("", "Advisory Board");
  }
  getadvisory() {
    this.servicecalls
      .postServer("getProductList", { collection: "advisory" })
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.person = res;
        },
        error => {
          console.log("error", error);
        }
      );
  }
}
