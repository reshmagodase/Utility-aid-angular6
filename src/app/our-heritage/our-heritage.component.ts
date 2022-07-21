import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MetaserviceService } from '../metaservice.service';
import { ServiceCallsService } from '../service-calls.service';

@Component({
  selector: 'app-our-heritage',
  templateUrl: './our-heritage.component.html',
  styleUrls: ['./our-heritage.component.css']
})
export class OurHeritageComponent implements OnInit {

  // txtEditor1 = "%3Cp%20class%3D%22p1%22%20style%3D%22margin-bottom%3A%200px%3B%20font-variant-numeric%3A%20normal%3B%20font-variant-east-asian%3A%20normal%3B%20font-stretch%3A%20normal%3B%20line-height%3A%20normal%3B%20font-family%3A%20Times%3B%22%3E%3Cb%20style%3D%22color%3A%20rgb(54%2C%20151%2C%20194)%3B%20font-size%3A%20x-large%3B%22%3EHow%20does%20Invoice%20Validation%20work%3F%3C%2Fb%3E%3C%2Fp%3E%3Cp%20class%3D%22p1%22%20style%3D%22margin-bottom%3A%200px%3B%20font-variant-numeric%3A%20normal%3B%20font-variant-east-asian%3A%20normal%3B%20font-stretch%3A%20normal%3B%20line-height%3A%20normal%3B%20font-family%3A%20Times%3B%20color%3A%20rgb(0%2C%200%2C%200)%3B%22%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3EUsing%20advanced%20software%2C%20we%20process%20our%20customer's%20invoices%20and%20credit%20notes%20for%20the%20duration%20of%20their%20energy%20contract.%20We%20check%20them%20against%20a%20comprehensive%20set%20of%20validators.%20If%20errors%20are%20detected%2C%20we%20report%20them%20to%20you%20and%20then%20deal%20directly%20with%20the%20suppliers%20to%20claim%20your%20money%20back.%20All%20moneys%20recovered%20are%20paid%20directly%20to%20you%2C%20not%20us.%20Our%20invoice%20validation%20service%20is%20available%20for%20retrospective%20audits%20going%20back%20over%20three%20years.%3C%2Fspan%3E%3C%2Fp%3E"
  // txtEditor2 = "%3Cp%20class%3D%22p1%22%20style%3D%22margin-bottom%3A%200px%3B%20font-variant-numeric%3A%20normal%3B%20font-variant-east-asian%3A%20normal%3B%20font-stretch%3A%20normal%3B%20line-height%3A%20normal%3B%20font-family%3A%20Times%3B%20color%3A%20rgb(0%2C%200%2C%200)%3B%22%3E%3Cb%20style%3D%22font-size%3A%20x-large%3B%22%3EWhat%20are%20the%20benefits%20of%20Invoice%20Validation%3F%3C%2Fb%3E%3C%2Fp%3E%3Cp%20class%3D%22p1%22%20style%3D%22margin-bottom%3A%200px%3B%20font-variant-numeric%3A%20normal%3B%20font-variant-east-asian%3A%20normal%3B%20font-stretch%3A%20normal%3B%20line-height%3A%20normal%3B%20font-family%3A%20Times%3B%20color%3A%20rgb(0%2C%200%2C%200)%3B%22%3E%3Cul%3E%3Cli%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3ERecovery%20of%20your%20money%3Cb%20style%3D%22%22%3E%3C%2Fb%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3E%3Cspan%20style%3D%22text-indent%3A%20-36px%3B%22%3EAllows%20you%20to%20focus%20on%20more%20important%20things%20within%20your%20organisation%3C%2Fspan%3E%3Cbr%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3EPeace%20of%20mind%20that%20you%20are%20not%20paying%20more%20than%20you%20should%20be%3Cspan%20style%3D%22text-indent%3A%20-36px%3B%22%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3Cdiv%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3E%3Cbr%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3Cdiv%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3E%3Cbr%3E%3C%2Fspan%3E%3C%2Fdiv%3E%3Cdiv%3E%3C%2Fdiv%3E%3C%2Fp%3E%3Cp%20class%3D%22p1%22%20style%3D%22margin-bottom%3A%200px%3B%20font-variant-numeric%3A%20normal%3B%20font-variant-east-asian%3A%20normal%3B%20font-stretch%3A%20normal%3B%20line-height%3A%20normal%3B%20font-family%3A%20Times%3B%22%3E%3Cb%20style%3D%22color%3A%20rgb(54%2C%20151%2C%20194)%3B%20font-size%3A%20x-large%3B%22%3EHow%20is%20it%20managed%3F%3C%2Fb%3E%3C%2Fp%3E%3Cp%20class%3D%22p1%22%20style%3D%22margin-bottom%3A%200px%3B%20font-variant-numeric%3A%20normal%3B%20font-variant-east-asian%3A%20normal%3B%20font-stretch%3A%20normal%3B%20line-height%3A%20normal%3B%20font-family%3A%20Times%3B%20color%3A%20rgb(0%2C%200%2C%200)%3B%22%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3EOur%20data%20centre%20manages%20all%20billing%20queries.%20These%20are%20fully%20auditable%20and%20we%20see%20them%20right%20through%20until%20overpayments%20are%20credited%20back%20into%20your%20account.%3C%2Fspan%3E%3C%2Fp%3E"
  // txtEditor3 = "%3Cp%20class%3D%22p1%22%20style%3D%22margin-bottom%3A%200px%3B%20font-variant-numeric%3A%20normal%3B%20font-variant-east-asian%3A%20normal%3B%20font-stretch%3A%20normal%3B%20line-height%3A%20normal%3B%20font-family%3A%20Times%3B%22%3E%3Cb%20style%3D%22font-size%3A%20x-large%3B%20color%3A%20rgb(54%2C%20151%2C%20194)%3B%22%3EKey%20Features%20of%20Invoice%20Validation%3C%2Fb%3E%3C%2Fp%3E%3Cp%20class%3D%22p1%22%20style%3D%22margin-bottom%3A%200px%3B%20font-variant-numeric%3A%20normal%3B%20font-variant-east-asian%3A%20normal%3B%20font-stretch%3A%20normal%3B%20line-height%3A%20normal%3B%20font-family%3A%20Times%3B%20color%3A%20rgb(0%2C%200%2C%200)%3B%22%3E%3Cul%3E%3Cli%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3E%3Cspan%20style%3D%22text-indent%3A%20-36px%3B%22%3EChange%20of%20Supplier%20check%20-%20we%20process%20your%20incumbent%20supplier'%20s%20final%20invoice%20to%20ensure%20the%20billing%20transition%20between%20suppliers%20is%20correct%3C%2Fspan%3E%3Cbr%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3EWe%20provide%20a%20multitude%20of%20reporting%20options%20based%20on%20your%20wants%20and%20needs%3Cspan%20style%3D%22text-indent%3A%20-36px%3B%22%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3E%3Cspan%20style%3D%22text-indent%3A%20-36px%3B%22%3EWe%20use%20a%20wide%20range%20of%20validators%20to%20capture%20all%20the%20different%20areas%20that%20can%20be%20incorrectly%20billed%3C%2Fspan%3E%3Cbr%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3EWe%20give%20you%20your%20own%20login%20to%20our%20software%20to%20view%20your%20data%20and%20reports%3Cspan%20style%3D%22text-indent%3A%20-36px%3B%22%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%3E%3Cspan%20style%3D%22text-indent%3A%20-36px%3B%20font-size%3A%20x-large%3B%22%3EOur%20suppliers%20provide%20us%20with%20dedicated%20account%20managers%20which%20means%20we%20receive%20more%20timely%20resolutions%3C%2Fspan%3E%3Cbr%3E%3C%2Fli%3E%3C%2Ful%3E%3C%2Fp%3E"
  // txtEditor4 = "%3Cp%20class%3D%22p1%22%20style%3D%22margin-bottom%3A%200px%3B%20font-variant-numeric%3A%20normal%3B%20font-variant-east-asian%3A%20normal%3B%20font-stretch%3A%20normal%3B%20line-height%3A%20normal%3B%20font-family%3A%20Times%3B%22%3E%3Cb%20style%3D%22font-size%3A%20x-large%3B%20color%3A%20rgb(54%2C%20151%2C%20194)%3B%22%3EHow%20does%20Energy%20Monitoring%20work%3F%3C%2Fb%3E%3C%2Fp%3E%3Cp%20class%3D%22p1%22%20style%3D%22margin-bottom%3A%200px%3B%20font-variant-numeric%3A%20normal%3B%20font-variant-east-asian%3A%20normal%3B%20font-stretch%3A%20normal%3B%20line-height%3A%20normal%3B%20font-family%3A%20Times%3B%20color%3A%20rgb(0%2C%200%2C%200)%3B%22%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3EWe%20import%20the%20data%20from%20your%20Half%20Hourly%20or%20AMR%20meter.%20From%20this%20we%20are%20able%20to%20run%20it%20through%20our%20software%20and%20produce%20monthly%20reports%20based%20on%20your%20consumption.%20The%20reports%20show%20times%20and%20days%20of%20excessive%20usage%2C%20highlighting%20base%20load%20and%20enabling%20you%20to%20work%20to%20targets.%3C%2Fspan%3E%3C%2Fp%3E"
  // txtEditor5 = "%3Cp%20class%3D%22p1%22%20style%3D%22margin-bottom%3A%200px%3B%20font-variant-numeric%3A%20normal%3B%20font-variant-east-asian%3A%20normal%3B%20font-stretch%3A%20normal%3B%20line-height%3A%20normal%3B%20font-family%3A%20Times%3B%22%3E%3Cb%20style%3D%22font-size%3A%20x-large%3B%20color%3A%20rgb(54%2C%20151%2C%20194)%3B%22%3EWhat%20are%20the%20benefits%20of%20Energy%20Monitoring%3F%3C%2Fb%3E%3C%2Fp%3E%3Cp%20class%3D%22p1%22%20style%3D%22margin-bottom%3A%200px%3B%20font-variant-numeric%3A%20normal%3B%20font-variant-east-asian%3A%20normal%3B%20font-stretch%3A%20normal%3B%20line-height%3A%20normal%3B%20font-family%3A%20Times%3B%20color%3A%20rgb(0%2C%200%2C%200)%3B%22%3E%3Cul%20style%3D%22%22%3E%3Cli%20style%3D%22%22%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3EComparison%20from%20month%20to%20month%3Cb%3E%3C%2Fb%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20style%3D%22%22%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3E%3Cspan%20style%3D%22text-indent%3A%20-36px%3B%22%3EMay%20identify%20sites%20which%20are%20not%20being%20energy%20efficient%3C%2Fspan%3E%3Cbr%3E%3C%2Fspan%3E%3C%2Fli%3E%3Cli%20style%3D%22%22%3E%3Cspan%20style%3D%22font-size%3A%20x-large%3B%22%3EAllows%20each%20site%20to%20work%20to%20targets%20for%20energy%20reduction%3C%2Fspan%3E%3Cspan%20style%3D%22text-indent%3A%20-36px%3B%20font-size%3A%2012px%3B%22%3E%3C%2Fspan%3E%3C%2Fli%3E%3C%2Ful%3E%3C%2Fp%3E"

  // producttext1: any
  // producttext2: any
  // producttext3: any
  // producttext4: any
  // producttext5: any

  text1;
  text2;
  text3;

  product: any;
  tab: any;
  tabData: any;
  tabData2: any;
  constructor(
    private servicecalls: ServiceCallsService,
    protected _sanitizer: DomSanitizer,
    private meta: MetaserviceService
  ) {
    this.getTabs();
  }

  ngOnInit(): void {

    // var productText = this.txtEditor1;
    // var productTextDec = decodeURIComponent(productText);
    // this.producttext1 = productTextDec;
    // this.producttext1 = this._sanitizer.bypassSecurityTrustHtml(this.producttext1);

    // var productText = this.txtEditor2;
    // var productTextDec = decodeURIComponent(productText);
    // this.producttext2 = productTextDec;
    // this.producttext2 = this._sanitizer.bypassSecurityTrustHtml(this.producttext2);

    // var productText = this.txtEditor3;
    // var productTextDec = decodeURIComponent(productText);
    // this.producttext3 = productTextDec;
    // this.producttext3 = this._sanitizer.bypassSecurityTrustHtml(this.producttext3);

    // var productText = this.txtEditor4;
    // var productTextDec = decodeURIComponent(productText);
    // this.producttext4 = productTextDec;
    // this.producttext4 = this._sanitizer.bypassSecurityTrustHtml(this.producttext4);

    // var productText = this.txtEditor5;
    // var productTextDec = decodeURIComponent(productText);
    // this.producttext5 = productTextDec;
    // this.producttext5 = this._sanitizer.bypassSecurityTrustHtml(this.producttext5);


    this.meta.updateMetaInfo(
      "Invoice Validation",
      "Invoice Validation",
      "assets/products.jpg",
      "invoice-validation"
    );
    this.meta.updateTitle("", "Our Heritage");
  }

  currentTabData(list) {
    for (let i = 0; i < this.product.length; i++) {
      if (this.product[i].heading == list) {
        this.tab = this.product[i];
        let tab1 = this.tab.product_text;
        this.tabData = decodeURIComponent(tab1);
        this.tabData = this._sanitizer.bypassSecurityTrustHtml(this.tabData);
        console.log("tabData", this.tabData)
        break;
      }
    }
  }

  getTabs() {
    this.servicecalls
      .getServer("getOurHeritagePageData")
      .subscribe(
        (res: any) => {
          console.log("Res=>", res);
          this.product = res[0];
          this.text1 = this.product.text1
          this.text2 = this.product.text2
          this.text3 = this.product.text3
          this.currentTabData("Fixed Price Strategy");
        },
        error => {
          console.log("error", error);
        }
      );
  }

}
