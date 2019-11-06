import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MediaComponent } from "./media.component";
import { MediaExpandOneComponent } from "../media-expand-one/media-expand-one.component";

import { Media } from "./media-routing.module";

@NgModule({
  imports: [Media, CommonModule],
  declarations: [MediaComponent, MediaExpandOneComponent]
})
export class MediaModule {}
