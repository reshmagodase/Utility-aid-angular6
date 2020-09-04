import { Component, OnInit } from '@angular/core';
import { MetaserviceService } from '../metaservice.service';

@Component({
  selector: 'app-googlead-thankyou',
  templateUrl: './googlead-thankyou.component.html',
  styleUrls: ['./googlead-thankyou.component.css']
})
export class GoogleadThankyouComponent implements OnInit {

  constructor(private meta: MetaserviceService) { }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Energy and Utilities Consultancy",
      "assest/contact1.jpg",
      ""
    );
    this.meta.updateTitle("", "Thank You");
  }

}
