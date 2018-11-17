import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import {GalleryComponent} from "@app/gallery/gallery.component";

const routes: Routes = [
  Shell.childRoutes([{ path: 'gallery', component: GalleryComponent }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GalleryRoutingModule {}
