import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleryComponent} from "@app/gallery/gallery.component";
import {GalleryRoutingModule} from "@app/gallery/gallery-routing.module";
import {GalleryService} from "@app/gallery/gallery.service";
import {SharedModule} from "@app/shared";

@NgModule({
  imports: [ SharedModule, CommonModule, GalleryRoutingModule],
  declarations: [GalleryComponent],
  providers: [GalleryService]
})
export class GalleryModule { }
