import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceCallsService } from '../service-calls.service';
import { MetaserviceService } from '../metaservice.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactformComponent implements OnInit {

  contactForm: FormGroup;
  loader:boolean = false;
  urlParams: any;
  constructor(private fb: FormBuilder, private service_api: ServiceCallsService,private router: Router,
    private meta: MetaserviceService, private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.urlParams = this.activatedRoute.snapshot.params.query;
    console.log("urlParams", this.urlParams);
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Energy and Utilities Consultancy",
      "assest/contact1.jpg",
      ""
    );
    this.meta.updateTitle("", "Contact Us");

    this.contactForm = this.fb.group({
      name: ["", Validators.required],
      cvemail: ["", Validators.required],
      contactNo: ["", Validators.required],
      organisation: ["", Validators.required],
      message:[""],
    });
  }

  onSubmit() {
    // debugger;
    console.log("form value", this.contactForm.value);
    this.loader = true;
    if (this.contactForm.valid) {
      console.log("form value", this.contactForm.value);
      this.service_api.postServerRes("saveContactFormData", { name: this.contactForm.value.name, email: this.contactForm.value.cvemail, phone: this.contactForm.value.contactNo, message: this.contactForm.value.message, church: this.contactForm.value.organisation,source: this.urlParams?this.urlParams:"Default URL" }).pipe(
        tap((resp: any) => console.log('heaeder', resp.headers.get('ReturnStatus')))
      ).subscribe((data: any) => {
        // console.log(data.headers.get('X-Token'));
        console.log(data);
        if (data && data.status == 200) {
          this.loader= false;
          this.contactForm.reset(); 
          this.router.navigate(["/thankyou-ad"]);
        }
      })
    }
    // resp.headers.get('ReturnStatus')
    else {
      console.log("---->", Object.keys(this.contactForm.controls))
      let lng = Object.keys(this.contactForm.controls)
      for (let i = 0; i < lng.length; i++) {

        if (this.contactForm.controls[lng[i]].status == 'INVALID') {
          this.contactForm.controls[lng[i]].markAsDirty();
        }
      }
      // this.requestForm.controls['audit'].markAsDirty();
    }
  }
}
