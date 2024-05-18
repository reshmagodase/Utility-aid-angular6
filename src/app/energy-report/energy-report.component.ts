import { Component, OnInit } from '@angular/core';
import { MetaserviceService } from "../metaservice.service";

@Component({
  selector: 'app-energy-report',
  templateUrl: './energy-report.component.html',
  styleUrls: ['./energy-report.component.css']
})
export class EnergyReportComponent implements OnInit {

  constructor(private meta: MetaserviceService) { }

  ngOnInit(): void {
    this.meta.updateTitle("", "Energy Report");
  }

}
