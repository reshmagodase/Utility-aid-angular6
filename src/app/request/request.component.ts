import { Component, OnInit } from "@angular/core";
import { MetaserviceService } from '../metaservice.service';

@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.css"]
})
export class RequestComponent implements OnInit {
  constructor(private meta:MetaserviceService) {}

  ngOnInit() {
    this.meta.updateTitle("","Request your free energy consultation");
  }
}
