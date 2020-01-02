import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MediaExpandOneComponent } from "../media-expand-one/media-expand-one.component";

import { MediaComponent } from "./media.component";
import { listLazyRoutes } from "@angular/compiler/src/aot/lazy_routes";

const routes: Routes = [
  { path: "", component: MediaComponent },
  {
    path: "news-media/:title/:newsDate",
    component: MediaExpandOneComponent
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class Media {}
