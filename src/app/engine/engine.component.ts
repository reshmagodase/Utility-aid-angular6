import {
  Component,
  OnInit,
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  ViewChild
} from "@angular/core";
import { MetaserviceService } from "../metaservice.service";
import * as resizer from "iframe-resizer";
import { IFrameComponent, iframeResizer } from "iframe-resizer";
@Component({
  selector: "app-engine",
  templateUrl: "./engine.component.html",
  styleUrls: ["./engine.component.css"]
})
// @Directive({
//   selector: "[appIframeResizer]"
// })
export class EngineComponent implements OnInit, AfterViewInit, OnDestroy {
  component: IFrameComponent;
  element: IFrameComponent;
  constructor(private meta: MetaserviceService) { }
  ngOnInit() {
    this.meta.updateTitle("", "Energy Switching");
  }
  ngAfterViewInit() {
    const components = iframeResizer(
      {
        checkOrigin: false,
        heightCalculationMethod: "documentElementOffset",
        log: false
      },
      this.element
    );

    /* save component reference so we can close it later */
    this.component = components && components.length > 0 ? components[0] : null;
  }

  ngOnDestroy(): void {
    if (this.component && this.component.iFrameResizer) {
      this.component.iFrameResizer.close();
    }
  }
}
