import { Component, OnInit } from "@angular/core";
import { MetaserviceService } from "../metaservice.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ServiceCallsService } from '../service-calls.service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: "app-request",
  templateUrl: "./request.component.html",
  styleUrls: ["./request.component.css"]
})
export class RequestComponent implements OnInit {
  requestForm: FormGroup;
  isSubmitted = false;
  isSubmittedOne = false;


  constructor(private meta: MetaserviceService, private request: FormBuilder, private service_api: ServiceCallsService) { }

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
      title: ["", Validators.required],
      fullName: ["", Validators.required],
      contact_number: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      audit: ["", Validators.required],
      company_name: ["", Validators.required],
      position: ["", Validators.required],
      current_supplier: ["", Validators.required],
      annual_energy_costs: ["", Validators.required],
      hearfrom: ["", Validators.required],
      msg: ["", Validators.required]
    });
  }
  onSubmit() {
    this.isSubmitted = true;
    this.isSubmittedOne = true;
    if (this.requestForm.valid) {
      console.log("form value", this.requestForm.value);
      this.service_api.postServer("sendRequestMail", this.requestForm.value).subscribe((data: any) => {
        console.log(data);
        this.requestForm.reset();
      })
    } else {
      console.log("---->", Object.keys(this.requestForm.controls))
      let lng = Object.keys(this.requestForm.controls)
      for (let i = 0; i < lng.length; i++) {

        if (this.requestForm.controls[lng[i]].status == 'INVALID') {
          this.requestForm.controls[lng[i]].markAsDirty();
        }
      }
      // this.requestForm.controls['audit'].markAsDirty();
    }


  }
}
