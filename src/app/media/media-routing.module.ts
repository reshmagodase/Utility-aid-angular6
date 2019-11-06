import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MediaExpandOneComponent } from "../media-expand-one/media-expand-one.component";

import { MediaComponent } from "./media.component";

const routes: Routes = [
  { path: "", component: MediaComponent },
  { path: "media-expand-one", component: MediaExpandOneComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class Media {}
