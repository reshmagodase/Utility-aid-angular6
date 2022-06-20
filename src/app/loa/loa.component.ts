import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaserviceService } from '../metaservice.service';
import { FormBuilder } from '@angular/forms';
import { ServiceCallsService } from '../service-calls.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-loa',
  templateUrl: './loa.component.html',
  styleUrls: ['./loa.component.css']
})
export class LoaComponent implements OnInit {

  urlParams:any;
  constructor(private fb: FormBuilder, private service_api: ServiceCallsService,private router: Router,
    private meta: MetaserviceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.urlParams = params['pardotId'];
    });
    console.log("urlParams", this.urlParams);
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Energy and Utilities Consultancy",
      "assest/contact1.jpg",
      ""
    );
    this.meta.updateTitle("", "Emails");
    this.sendLOA();
  }

  sendLOA() {
    this.service_api.postServerRes("getEmailByPardotId", { pardotId: this.urlParams,path: "addtocall" }).pipe(
      tap((resp: any) => console.log('heaeder', resp.headers.get('ReturnStatus')))
    ).subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.service_api.postServerRes("changeAddtoCallStatusPardotEmail", { email: data.body[0].Email,ID: data.body[0].ID,loasent: data.body[0].loasent ? data.body[0].loasent : false }).pipe(
          tap((resp: any) => console.log('heaeder', resp.headers.get('ReturnStatus')))
        ).subscribe((data: any) => {
          console.log(data);
        })
      }
    })
  }

}
