import { Component, OnInit } from '@angular/core';
import { ServiceCallsService } from '../service-calls.service';

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css']
})
export class OurTeamComponent implements OnInit {
  product
  text1
  constructor(
    private servicecalls: ServiceCallsService,

  ) { 
    this.getTabs()
  }

  ngOnInit(): void {
  }

  getTabs() {
    this.servicecalls
      .getServer("getOurTeamPageData")
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.product = res;
        },
        error => {
          console.log("error", error);
        }
      );
  }

}
