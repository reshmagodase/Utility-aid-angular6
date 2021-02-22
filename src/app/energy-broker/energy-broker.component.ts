import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Renderer2,
  Inject
} from "@angular/core";
import { MetaserviceService } from "../metaservice.service";
import { Router } from "@angular/router";
import { ServiceCallsService } from "../service-calls.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { LazyLoadScriptService } from "../lazy-load-script.service";
import {
  trigger,
  transition,
  style,
  animate,
  state
} from "@angular/animations";
import { tap } from "rxjs/operators";
import { DOCUMENT } from "@angular/common";
declare var $;
@Component({
  selector: "app-energy-broker",
  templateUrl: "./energy-broker.component.html",
  styleUrls: ["./energy-broker.component.css"],
  animations: [
    trigger("animationOption2", [
      transition(":enter", [style({ opacity: "0" }), animate(500)]),
      // transition(':leave', [
      //   animate(300, style({ backgroundColor: 'yellow' }))
      // ]),
      state("*", style({ opacity: 1 }))
    ])
  ]
})
export class EnergyBrokerComponent implements OnInit {
  @ViewChild("header") header: ElementRef;
  data: any;
  siteData: any;
  text: any;
  scroll$: any;
  adForm: FormGroup;
  leadForm: FormGroup;
  leadForm2: FormGroup;
  loader: boolean = false;
  loader1: boolean = false;
  constructor(
    private lazyLoadService: LazyLoadScriptService,
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer,
    private meta: MetaserviceService,
    private router: Router,
    private fb: FormBuilder,
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document
  ) {
    this.getText();
  }

  ngOnInit(): void {
    this.meta.updateMetaInfo(
      "We're inspired by the organisations and people we work with. We want to help save them time and money when they source and purchase their energy.",
      "Energy and Utilities Consultancy",
      "assest/contact1.jpg",
      ""
    );

    this.meta.updateTitle("", "Energy and Utilities Consultancy");
    this.adForm = this.fb.group({
      name: ["", Validators.required],
      cvemail: ["", Validators.required],
      contactNo: ["", Validators.required],
      message: ["", Validators.required]
    });
    this.leadForm = this.fb.group({
      name: ["", Validators.required],
      cvemail: ["", Validators.required],
      contactNo: ["", Validators.required],
      company: ["", Validators.required]
    });
    this.leadForm2 = this.fb.group({
      name: ["", Validators.required],
      cvemail: ["", Validators.required],
      contactNo: ["", Validators.required],
      message: ["", Validators.required]
    });

    let script = this._renderer2.createElement("script");
    script.type = `application/javascript`;
    script.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'UA-164807903-1');
        `;

    this._renderer2.appendChild(this._document.body, script);
  }

  scroll() {
    document
      .getElementById("contactUs")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }

  getText() {
    this.servicecalls
      .postServer("getProductList", { collection: "home" })
      .subscribe(
        (res: any) => {
          this.data = res[0];
          let textDec = decodeURIComponent(res[0].text4);
          this.text = this._sanitizer.bypassSecurityTrustHtml(textDec);
        },
        error => {}
      );
  }

  modalClose() {
    $("#leadFormModal").modal("hide");
    this.loader1 = false;
    // this.applyForm.reset();
  }

  onSubmit() {
    // debugger;
    console.log("form value", this.adForm.value);
    this.loader = true;
    if (this.adForm.valid) {
      console.log("form value", this.adForm.value);
      this.servicecalls
        .postServerRes("sendGoogleAdContact", {
          name: this.adForm.value.name,
          cvemail: this.adForm.value.cvemail,
          contactNo: this.adForm.value.contactNo,
          message: this.adForm.value.message
        })
        .pipe(
          tap((resp: any) =>
            console.log("heaeder", resp.headers.get("ReturnStatus"))
          )
        )
        .subscribe((data: any) => {
          // console.log(data.headers.get('X-Token'));
          console.log(data);
          if (data && data.status == 200) {
            this.loader = false;
            this.adForm.reset();
            this.router.navigate(["/thankyou-ad"]);
          }
        });
    }
    // resp.headers.get('ReturnStatus')
    else {
      console.log("---->", Object.keys(this.adForm.controls));
      let lng = Object.keys(this.adForm.controls);
      for (let i = 0; i < lng.length; i++) {
        if (this.adForm.controls[lng[i]].status == "INVALID") {
          this.adForm.controls[lng[i]].markAsDirty();
        }
      }
      // this.requestForm.controls['audit'].markAsDirty();
    }
  }

  onLeadFormSubmit() {
    console.log("form value", this.leadForm.value);
    this.loader = true;
    if (this.leadForm.valid) {
      console.log("form value", this.leadForm.value);
      this.servicecalls
        .postServerRes("sendLeadContact", {
          name: this.leadForm.value.name,
          cvemail: this.leadForm.value.cvemail,
          contactNo: this.leadForm.value.contactNo,
          company: this.leadForm.value.company
        })
        .pipe(
          tap((resp: any) =>
            console.log("heaeder", resp.headers.get("ReturnStatus"))
          )
        )
        .subscribe((data: any) => {
          // console.log(data.headers.get('X-Token'));
          console.log(data);
          if (data && data.status == 200) {
            this.loader = false;
            this.leadForm.reset();
            this.router.navigate(["/thankyou-ad"]);
          }
        });
    }
    // resp.headers.get('ReturnStatus')
    else {
      console.log("---->", Object.keys(this.leadForm.controls));
      let lng = Object.keys(this.leadForm.controls);
      for (let i = 0; i < lng.length; i++) {
        if (this.leadForm.controls[lng[i]].status == "INVALID") {
          this.leadForm.controls[lng[i]].markAsDirty();
        }
      }
      // this.requestForm.controls['audit'].markAsDirty();
    }
  }

  onLead1Submit() {
    // this.loader1 = true;
    if (this.leadForm2.valid) {
      console.log("form value", this.leadForm2.value);
      this.servicecalls
        .postServerRes("sendGoogleAdContact", {
          name: this.leadForm2.value.name,
          cvemail: this.leadForm2.value.cvemail,
          contactNo: this.leadForm2.value.contactNo,
          message: this.leadForm2.value.message
        })
        .pipe(
          tap((resp: any) =>
            console.log("heaeder", resp.headers.get("ReturnStatus"))
          )
        )
        .subscribe((data: any) => {
          // console.log(data.headers.get('X-Token'));
          console.log(data);
          if (data && data.status == 200) {
            this.loader1 = true;
            this.leadForm2.reset();
            // this.router.navigate(["/thankyou-ad"]);
          }
        });
    }
    // resp.headers.get('ReturnStatus')
    else {
      console.log("---->", Object.keys(this.leadForm2.controls));
      let lng = Object.keys(this.leadForm2.controls);
      for (let i = 0; i < lng.length; i++) {
        if (this.leadForm2.controls[lng[i]].status == "INVALID") {
          this.leadForm2.controls[lng[i]].markAsDirty();
        }
      }
      // this.requestForm.controls['audit'].markAsDirty();
    }
  }

  ngAfterContentInit() {
    this.lazyLoadService
      .loadScript(
        "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js"
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
    $(".navbar-nav").hide();
    $("#collapsibleNavbar").addClass("show");
    $(".navbar-toggler").css("visibility", "hidden");
    $(".freephone-nav").show();
    // this.renderer.addClass("collapsibleNavbar","show");
  }
}
