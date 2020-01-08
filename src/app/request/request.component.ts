import { Component, OnInit } from "@angular/core";
import { MetaserviceService } from "../metaservice.service";
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.css"]
})
export class RequestComponent implements OnInit {
  requestForm: FormGroup;

  constructor(private meta: MetaserviceService, private request: FormBuilder) {}

  ngOnInit() {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Request your free energy consultation",
      "assets/logoUA.png",
      "request"
    );
    this.meta.updateTitle("", "Request your free energy consultation");
    this.initForm();
  }
  initForm() {
    this.requestForm = this.request.group({
      title: [""],
      fullname: [""],
      contact: [""],
      email: [""],
      audit: [""],
      companyname: [""],
      yourposition: [""],
      supplier: [""],
      cost: [""],
      about: [""],
      message: [""]
    });
  }
  onSubmit() {
    console.log("form value", this.requestForm.value);
  }
}
