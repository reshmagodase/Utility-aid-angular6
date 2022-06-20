import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { ServiceCallsService } from '../service-calls.service';
import { Router } from '@angular/router';
import { MetaserviceService } from '../metaservice.service';

@Component({
  selector: 'app-google-ad',
  templateUrl: './google-ad.component.html',
  styleUrls: ['./google-ad.component.css']
})
export class GoogleAdComponent implements OnInit {

  adForm: FormGroup;
  loader:boolean= false;
  constructor(private fb: FormBuilder, private service_api: ServiceCallsService,private router: Router,private meta: MetaserviceService) { }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Energy and Utilities Consultancy",
      "assest/contact1.jpg",
      ""
    );
    this.meta.updateTitle("", "Contact Us");
    this.adForm = this.fb.group({
      name: ["", Validators.required],
      cvemail: ["", Validators.required],
      contactNo: ["", Validators.required],
      message: ["", Validators.required],
    });
  }

  onSubmit() {
    // debugger;
    console.log("form value", this.adForm.value);
    this.loader = true;
    if (this.adForm.valid) {
      console.log("form value", this.adForm.value);
      this.service_api.postServerRes("sendGoogleAdContact", { name: this.adForm.value.name, cvemail: this.adForm.value.cvemail, contactNo: this.adForm.value.contactNo, message: this.adForm.value.message }).pipe(
        tap((resp: any) => console.log('heaeder', resp.headers.get('ReturnStatus')))
      ).subscribe((data: any) => {
        // console.log(data.headers.get('X-Token'));
        console.log(data);
        if (data && data.status == 200) {
          this.loader= false;
          this.adForm.reset(); 
          this.router.navigate(["/thankyou-ad"]);
        }
      })
    }
    // resp.headers.get('ReturnStatus')


    else {
      console.log("---->", Object.keys(this.adForm.controls))
      let lng = Object.keys(this.adForm.controls)
      for (let i = 0; i < lng.length; i++) {

        if (this.adForm.controls[lng[i]].status == 'INVALID') {
          this.adForm.controls[lng[i]].markAsDirty();
        }
      }
      // this.requestForm.controls['audit'].markAsDirty();
    }


  }

}
