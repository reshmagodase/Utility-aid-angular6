import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { LazyLoadScriptService } from "../lazy-load-script.service";
import { map, filter, take, switchMap } from "rxjs/operators";
import { ServiceCallsService } from "../service-calls.service";
import { DomSanitizer } from "@angular/platform-browser";
import { MetaserviceService } from "../metaservice.service";
import { Router } from "@angular/router";
import lozad from 'lozad'

declare var $;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]

})
export class HomeComponent implements OnInit {

  data: any;
  siteData: any;
  text: any;
  scroll$: any;
  constructor(
    private lazyLoadService: LazyLoadScriptService,
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer,
    private meta: MetaserviceService,
    private router: Router
  ) {

    this.getText();

  }

  ngOnInit() {
    // const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    // observer.observe();
    // $("div.header").lazyload({
    //   effect: "fadeIn"
    // });
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Energy and Utilities Consultancy",
      "assest/contact1.jpg",
      ""
    );
    this.meta.updateTitle("", "Energy and Utilities Consultancy");
  }

  scroll() {
    this.router.navigate(["/why-ua"], { fragment: "saveMoney" });
  }
  goTo() {
    this.router.navigate(["/our-client-say"], { fragment: "case-studies" });
  }
  getText() {
    this.servicecalls
      .postServer("getProductList", { collection: "home" })
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.data = res[0];
          // this.siteData = res[0]

          console.log("----", this.data);
          // var textFour = this.data.text4;
          let textDec = decodeURIComponent(res[0].text4);
          console.log("Res=>", textDec);

          this.text = this._sanitizer.bypassSecurityTrustHtml(textDec);
        },
        error => {
          console.log("error", error);
        }
      );
  }

  ngAfterContentInit() {
    this.lazyLoadService
      .loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
      )
      // .pipe(
      //   map(_ => "jQuery is loaded"),
      //   filter(jquery => !!jquery),
      //   take(1),
      //   switchMap(_ =>
      //     this.lazyLoadService.loadScript(
      //       "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
      //     )
      //   )
      // )
      .subscribe(_ => {
        $(".slick-container").slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 7,
          slidesToScroll: 7,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        });
      });
  }
}
