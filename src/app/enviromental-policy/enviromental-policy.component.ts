import { Component, OnInit } from "@angular/core";
import { MetaserviceService } from "../metaservice.service";

@Component({
  selector: "app-enviromental-policy",
  templateUrl: "./enviromental-policy.component.html",
  styleUrls: ["./enviromental-policy.component.css"]
})
export class EnviromentalPolicyComponent implements OnInit {
  constructor(private meta: MetaserviceService) {}

  ngOnInit() {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Energy and Utilities Consultancy",
      "contact.jpg",
      "environmental-policy"
    );
    this.meta.updateTitle("", "Energy and Utilities Consultancy");
  }
}
