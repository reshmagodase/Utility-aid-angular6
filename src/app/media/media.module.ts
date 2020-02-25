import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MediaComponent } from "./media.component";
import { MediaExpandOneComponent } from "../media-expand-one/media-expand-one.component";

import { Media } from "./media-routing.module";
import { scrollPreset, LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [Media, CommonModule, LazyLoadImageModule.forRoot({
    preset: scrollPreset, // <-- tell LazyLoadImage that you want to use scrollPreset
    // finally: ({ element }) => console.log('The image is loaded', element)
  })],
  declarations: [MediaComponent, MediaExpandOneComponent]
})
export class MediaModule { }
