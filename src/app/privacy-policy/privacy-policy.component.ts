import { Component, OnInit } from "@angular/core";
import { MetaserviceService } from "../metaservice.service";

@Component({
  selector: "app-privacy-policy",
  templateUrl: "./privacy-policy.component.html",
  styleUrls: ["./privacy-policy.component.css"]
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(private meta: MetaserviceService) {}

  ngOnInit() {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Energy and Utilities Consultancy",
      "contact.jpg",
      "privacy-policy"
    );
    this.meta.updateTitle("", "Energy and Utilities Consultancy");
  }
}
