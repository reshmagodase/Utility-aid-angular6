import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MetaserviceService } from '../metaservice.service';
import { ServiceCallsService } from '../service-calls.service';
import { FormBuilder } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-email-campaign',
  templateUrl: './email-campaign.component.html',
  styleUrls: ['./email-campaign.component.css']
})
export class EmailCampaignComponent implements OnInit {

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
    this.service_api.postServerRes("getEmailByPardotId", { pardotId: this.urlParams,path: "success" }).pipe(
      tap((resp: any) => console.log('heaeder', resp.headers.get('ReturnStatus')))
    ).subscribe((data: any) => {
      console.log(data);
      if (data) {
        this.service_api.postServerRes("sendLOAmail", { email: data.body[0].Email,ID: data.body[0].ID,addtocall: data.body[0].addtocall ? data.body[0].addtocall : false }).pipe(
          tap((resp: any) => console.log('heaeder', resp.headers.get('ReturnStatus')))
        ).subscribe((data: any) => {
          console.log(data);
        })
      }
    })
  }

}
