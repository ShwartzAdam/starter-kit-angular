import { Component, OnInit } from '@angular/core';
import {finalize} from "rxjs/operators";
import {GalleryService, Image} from "@app/gallery/gallery.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.isLoading = true;
    // this.galleryService
    //   .getImagesSec()
    //   .pipe(
    //     finalize(() => {
    //       this.isLoading = false;
    //     })
    //   )
    //   .subscribe((images: Image[]) => {
    //     this.images = images;
    //   });
  }

}
