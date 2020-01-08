import { Component, OnInit } from "@angular/core";
import { MetaserviceService } from "../metaservice.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-work-with-us",
  templateUrl: "./work-with-us.component.html",
  styleUrls: ["./work-with-us.component.css"]
})
export class WorkWithUsComponent implements OnInit {
  selectedFiles: FileList;
  fileName: string;
  name: string;
  applyForm: FormGroup;
  constructor(private meta: MetaserviceService, private apply: FormBuilder) {}

  ngOnInit() {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Work With Us",
      "assets/contact.jpg",
      "workwithus"
    );
    this.meta.updateTitle("", "Work With Us");
    this.initForm();
  }
  initForm() {
    this.applyForm = this.apply.group({
      name: [""],
      email: [""],
      file: [""]
    });
  }
  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.fileName = this.selectedFiles[0].name;
    console.log("selectedFiles: " + this.fileName);
  }
  getName(e) {
    this.name = e;
    this.fileName = "";
    console.log(e);
  }
  onSubmit() {
    console.log("form value", this.applyForm.value);
  }
}
