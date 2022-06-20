import { Component, OnInit } from "@angular/core";
import { MetaserviceService } from "../metaservice.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ServiceCallsService } from '../service-calls.service';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loa-upload',
  templateUrl: './loa-upload.component.html',
  styleUrls: ['./loa-upload.component.css']
})
export class LoaUploadComponent implements OnInit {

  loaForm:FormGroup;
  selectedFiles: FileList;
  fileName: string;
  name: string;
  cvpath: any;
  cvname: any;
  constructor(private meta: MetaserviceService, private http: HttpClient, private apply: FormBuilder, 
    private service_api: ServiceCallsService,private router: Router) { }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Work With Us",
      "assets/contact.jpg",
      "workwithus"
    );
    this.meta.updateTitle("", "LOA Upload");
    this.initForm();
  }

  initForm() {
    this.loaForm = this.apply.group({
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
    this.service_api.postServer("uploadLOA", formData).subscribe((data: any) => {
      console.log(data);
      this.cvpath = data.path;
      this.cvname = data.name;
      // this.loaForm.reset();
    })
  }

  onSubmit() {
    // debugger;
    console.log("form value", this.loaForm.value);




    if (this.loaForm.valid) {
      console.log("form value", this.loaForm.value);
      this.service_api.postServerRes("saveLOA", { name: this.loaForm.value.name, cvemail: this.loaForm.value.cvemail, cvpath: this.cvpath }).pipe(
        tap((resp: any) => console.log('heaeder', resp.headers.get('ReturnStatus')))
      ).subscribe((data: any) => {
        // console.log(data.headers.get('X-Token'));
        console.log(data);
        if (data && data.status == 200) {
          this.loaForm.reset();
          this.router.navigate(["/thankyou-upload-loa"]);
        }
      })
    }
    // resp.headers.get('ReturnStatus')


    else {
      console.log("---->", Object.keys(this.loaForm.controls))
      let lng = Object.keys(this.loaForm.controls)
      for (let i = 0; i < lng.length; i++) {

        if (this.loaForm.controls[lng[i]].status == 'INVALID') {
          this.loaForm.controls[lng[i]].markAsDirty();
        }
      }
      // this.requestForm.controls['audit'].markAsDirty();
    }


  }

}
