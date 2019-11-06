import { Component, OnInit } from "@angular/core";
import { LazyLoadScriptService } from "../lazy-load-script.service";
import { map, filter, take, switchMap } from "rxjs/operators";
import { ServiceCallsService } from "../service-calls.service";
import { DomSanitizer } from "@angular/platform-browser";

declare var $;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  data: any;
  text: any;
  constructor(
    private lazyLoadService: LazyLoadScriptService,
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer
  ) {
    this.getText();
  }
  ngOnInit() {}

  getText() {
    this.servicecalls
      .postServer("getProductList", { collection: "home" })
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.data = res;
          // console.log("----", this.data);
          var textFour = this.data[0].text4;
          var textDec = decodeURIComponent(textFour);
          console.log("Res=>", textDec);
          this.text = textDec;
          this.text = this._sanitizer.bypassSecurityTrustHtml(this.text);
        },
        error => {
          console.log("error", error);
        }
      );
  }

  ngAfterContentInit() {
    this.lazyLoadService
      .loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"
      )
      .pipe(
        map(_ => "jQuery is loaded"),
        filter(jquery => !!jquery),
        take(1),
        switchMap(_ =>
          this.lazyLoadService.loadScript(
            "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
          )
        )
      )
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
