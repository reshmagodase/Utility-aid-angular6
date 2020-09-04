import { Component, OnInit } from "@angular/core";
import { MetaserviceService } from "../metaservice.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ServiceCallsService } from '../service-calls.service';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
declare var $: any;

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
  cvpath: any;
  cvname: any;
  loader:boolean = false;
  constructor(private meta: MetaserviceService, private http: HttpClient, private apply: FormBuilder, private service_api: ServiceCallsService) { }

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
      name: ["", Validators.required],
      cvemail: ["", [Validators.required, Validators.email]],
      file: ["", Validators.required]
    });
  }
  detectFiles(event) {
    let file: File = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    // this.selectedFiles = event.target.files;
    this.fileName = event.target.files[0].name;
    // console.log("selectedFiles: " + event.target.value);
    this.service_api.postServer("uploadCV", formData).subscribe((data: any) => {
      console.log(data);
      this.cvpath = data.path;
      this.cvname = data.name;
      // this.applyForm.reset();
    })
  }
  getName(e) {
    this.applyForm.reset();
    $("#myModal2").modal("show");
    this.name = e;
    this.fileName = "";
    console.log(e);

  }
  modalClose() {
    $("#myModal2").modal("hide");
    this.applyForm.reset();
  }
  onSubmit() {
    // debugger;
    console.log("form value", this.applyForm.value);
    this.loader = true;



    if (this.applyForm.valid) {
      console.log("form value", this.applyForm.value);
      this.service_api.postServerRes("sendCV", { name: this.applyForm.value.name, cvemail: this.applyForm.value.cvemail, cvpath: this.cvpath, cvname: this.cvname, location: this.name }).pipe(
        tap((resp: any) => console.log('heaeder', resp.headers.get('ReturnStatus')))
      ).subscribe((data: any) => {
        // console.log(data.headers.get('X-Token'));
        console.log(data);
        if (data && data.status == 200) {
          this.loader= false;
          this.applyForm.reset();
          $("#myModal2").modal("hide");
        }
      })
    }
    // resp.headers.get('ReturnStatus')


    else {
      console.log("---->", Object.keys(this.applyForm.controls))
      let lng = Object.keys(this.applyForm.controls)
      for (let i = 0; i < lng.length; i++) {

        if (this.applyForm.controls[lng[i]].status == 'INVALID') {
          this.applyForm.controls[lng[i]].markAsDirty();
        }
      }
      // this.requestForm.controls['audit'].markAsDirty();
    }


  }
}
