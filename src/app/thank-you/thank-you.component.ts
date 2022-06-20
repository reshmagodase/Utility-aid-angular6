import { Component, OnInit } from '@angular/core';
import { MetaserviceService } from '../metaservice.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.css']
})
export class ThankYouComponent implements OnInit {

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
