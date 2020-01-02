import { Component, OnInit } from "@angular/core";
import { MetaserviceService } from "../metaservice.service";

@Component({
  selector: "app-work-with-us",
  templateUrl: "./work-with-us.component.html",
  styleUrls: ["./work-with-us.component.css"]
})
export class WorkWithUsComponent implements OnInit {
  selectedFiles: FileList;
  fileName: string;
  constructor(private meta: MetaserviceService) {}

  ngOnInit() {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Work With Us",
      "contact.jpg",
      "workwithus"
    );
    this.meta.updateTitle("", "Work With Us");
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.fileName = this.selectedFiles[0].name;
    console.log("selectedFiles: " + this.fileName);
  }
}
