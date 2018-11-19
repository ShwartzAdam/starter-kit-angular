import {Component, ElementRef, OnDestroy, OnInit, Renderer2, ViewChild} from '@angular/core';
import {GalleryService} from "@app/gallery/gallery.service";
import {animate, state, style, transition, trigger, useAnimation} from "@angular/animations";
import { slideInUp,zoomIn } from 'ng-animate';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('slideInUp', [transition('* => true', useAnimation(slideInUp))]) ,
    trigger('zoomIn', [transition('* => *', useAnimation(zoomIn))]) ,
  ]
})
export class GalleryComponent implements OnInit ,OnDestroy{
  @ViewChild('images')  imagesElement: ElementRef;

  categories: any;
  images: any;
  isToggle: boolean;
  isArrowDownClicked: boolean;
  constructor(private galleryService: GalleryService,
              private renderer2: Renderer2,
              private el:ElementRef) { }

  ngOnInit() {
    this.categories = [
      {name: 'Art' , url:'/art'},
      {name: 'Sport' , url:'/sport'},
      {name: 'Kibbutz' , url:'/kibbutz'},
      {name: 'Army' , url:'/army'},
      {name: 'Portraits' , url:'/portraits'}
    ];
    this.galleryService.getPhotos().then(
      dataObj => {
        this.images = dataObj;
      }
    )
  }
  toggle(){
    this.isToggle = !this.isToggle;
    this.isArrowDownClicked = !this.isArrowDownClicked;
  }

  ngOnDestroy(): void {
    this.renderer2.removeChild(this.el.nativeElement,this.imagesElement.nativeElement);
  }

}
