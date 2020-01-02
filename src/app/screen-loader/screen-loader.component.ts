import { Component, OnInit } from "@angular/core";
import { LoaderService } from "../loader.service";

@Component({
  selector: "app-screen-loader",
  templateUrl: "./screen-loader.component.html",
  styleUrls: ["./screen-loader.component.css"]
})
export class ScreenLoaderComponent implements OnInit {
  loading: boolean = false;

  startedClass = false;
  completedClass = false;
  preventAbuse = false;
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe(v => {
      this.loading = v;
    });
  }

  ngOnInit() {}
  onStarted() {
    this.startedClass = true;
    setTimeout(() => {
      this.startedClass = false;
    }, 800);
  }

  onCompleted() {
    this.completedClass = true;
    setTimeout(() => {
      this.completedClass = false;
    }, 800);
  }
}
