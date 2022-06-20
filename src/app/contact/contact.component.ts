import { Component, OnInit } from "@angular/core";
import { ServiceCallsService } from "../service-calls.service";
import { MetaserviceService } from "../metaservice.service";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  contacts: any;
  constructor(
    private servicecalls: ServiceCallsService,
    private meta: MetaserviceService
  ) {
    this.getContact();
  }

  ngOnInit() {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Contact",
      "assets/logoUA.png",
      "contact"
    );
    this.meta.updateTitle("", "Contact");
  }
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
