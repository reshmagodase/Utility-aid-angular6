import { Component, OnInit } from '@angular/core';
import { MetaserviceService } from '../metaservice.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor(private meta: MetaserviceService) { }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Thank You",
      "assets/contact.jpg",
      "thankyou"
    );
    this.meta.updateTitle("", "Thank You");
  }

}
