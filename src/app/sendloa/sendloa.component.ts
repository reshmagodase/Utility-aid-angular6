import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaserviceService } from '../metaservice.service';
import { ServiceCallsService } from '../service-calls.service';
import { FormBuilder } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-sendloa',
  templateUrl: './sendloa.component.html',
  styleUrls: ['./sendloa.component.css']
})
export class SendloaComponent implements OnInit {

  urlParams:any;
  constructor(private fb: FormBuilder, private service_api: ServiceCallsService,private router: Router,
    private meta: MetaserviceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.urlParams = this.activatedRoute.snapshot.queryParams.pardotId;
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
    this.service_api.postServerRes("getEmailBySalesforceId", { pardotId: this.urlParams,path: "sendloa" }).pipe(
      tap((resp: any) => console.log('heaeder', resp.headers.get('ReturnStatus')))
    ).subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.service_api.postServerRes("sendLOA", { email: data.body[0].email,salesforceId: data.body[0].salesforceId,sendloa: true }).pipe(
          tap((resp: any) => console.log('heaeder', resp.headers.get('ReturnStatus')))
        ).subscribe((data: any) => {
          console.log(data);
        })
      }
    })
  }

}
