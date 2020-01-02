import { Component, OnInit } from "@angular/core";
import { MetaserviceService } from "../metaservice.service";

@Component({
  selector: "app-bribery-act",
  templateUrl: "./bribery-act.component.html",
  styleUrls: ["./bribery-act.component.css"]
})
export class BriberyActComponent implements OnInit {
  constructor(private meta: MetaserviceService) {}

  ngOnInit() {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Energy and Utilities Consultancy",
      "contact.jpg",
      "bribery-act-statement"
    );
    this.meta.updateTitle("", "Energy and Utilities Consultancy");
  }
}
