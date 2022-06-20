import { Component, HostListener, ElementRef } from "@angular/core";
import { LocationStrategy } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";
import { MetaserviceService } from "./metaservice.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "utilityaid";
  isPopState = false;
  showButton: boolean = false;

  constructor(
    private router: Router,
    private locStrat: LocationStrategy,
    public el: ElementRef,
    private meta: MetaserviceService
  ) {
    this.meta.updateTitle();
    this.checkBrowser();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let pos =
      document.documentElement.scrollTop +
      document.documentElement.offsetHeight -
      300;
    let max = document.documentElement.scrollHeight;

    if (pos >= max) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
  ngOnInit() {
    let pos = window.pageYOffset;
    console.log("pos-->>>", pos);
  }
  backToTop() {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 10);
  }
  onActivate(event) {
    window.scroll(0, 0);
  }
  checkBrowser() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)), 10);
    }
  }
}
