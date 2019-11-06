import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contacts: any;
  constructor(private servicecalls: ServiceCallsService) {
    this.getContact();
  }

  ngOnInit() {}
  getContact() {
    this.servicecalls
      .postServer("getProductList", { collection: "contact" })
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.contacts = res;
        },
        error => {
          console.log("error", error);
        }
      );
  }
}
