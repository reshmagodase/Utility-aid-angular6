import { Component, OnInit } from "@angular/core";
import { MetaserviceService } from "../metaservice.service";

@Component({
  selector: "app-domestic-energy",
  templateUrl: "./domestic-energy.component.html",
  styleUrls: ["./domestic-energy.component.css"]
})
export class DomesticEnergyComponent implements OnInit {
  constructor(private meta: MetaserviceService) {}

  ngOnInit() {
    this.meta.updateMetaInfo(
      "Compare your gas and electricity",
      "Energy Switching",
      "assets/logoUA.png",
      "energyswitching"
    );
    this.meta.updateTitle("", "Energy Switching");
  }
}
