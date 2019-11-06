import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-work-with-us",
  templateUrl: "./work-with-us.component.html",
  styleUrls: ["./work-with-us.component.css"]
})
export class WorkWithUsComponent implements OnInit {
  selectedFiles: FileList;
  fileName: string;
  constructor() {}

  ngOnInit() {}
  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.fileName = this.selectedFiles[0].name;
    console.log("selectedFiles: " + this.fileName);
  }
}
