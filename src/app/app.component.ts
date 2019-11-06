import { Component, HostListener, ElementRef } from "@angular/core";
import { LocationStrategy } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";
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
    public el: ElementRef
  ) {}

  @HostListener("window:scroll", ["$event"])
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
  backToTop(event) {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }
  onActivate(event) {
    window.scroll(0, 0);
  }
}
