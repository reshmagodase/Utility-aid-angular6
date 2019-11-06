import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
@Component({
  selector: "app-advisory-board",
  templateUrl: "./advisory-board.component.html",
  styleUrls: ["./advisory-board.component.css"]
})
export class AdvisoryBoardComponent implements OnInit {
  person: any;
  constructor(private servicecalls: ServiceCallsService) {
    this.getadvisory();
  }

  ngOnInit() {}
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
