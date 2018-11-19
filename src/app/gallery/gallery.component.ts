import { Component, OnInit } from '@angular/core';
import {finalize} from "rxjs/operators";
import {GalleryService} from "@app/gallery/gallery.service";
import {Observable} from "rxjs/internal/Observable";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  categories: any;
  images: any;

  isArrowDownClicked: boolean;
  isToggle: boolean;
  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
    this.categories = [
      {name: 'Art' , url:'/art'},
      {name: 'Sport' , url:'/sport'},
      {name: 'Kibbutz' , url:'/kibbutz'},
      {name: 'Army' , url:'/army'},
      {name: 'Portraits' , url:'/portraits'}
    ];
    this.galleryService.getPhotos().then(
      dataObj => this.images = dataObj
    )
  }
  toggle(){
    this.isToggle = !this.isToggle;
    this.isArrowDownClicked = !this.isArrowDownClicked;
  }


}
