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
