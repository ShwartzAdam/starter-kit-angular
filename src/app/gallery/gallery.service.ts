import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";
import { map, filter } from 'rxjs/operators';
import {Photo} from "./gallery";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  url :string = 'https://api.unsplash.com/photos/?client_id=078450d41f39b1f8c479dc40b607b89d277db3f0513f20cfd4ae9c84ec168896';
  photos: Photo[] = [];
  constructor(private httpClient: HttpClient) { }

  getPhotos() {
    return new Promise<Photo[]>((resolve,reject) =>{
      const res = this.httpClient.get(this.url);
      res.forEach(_obj => {
        let len = _obj['length'];
        let index = 0;
        while( len > 0 ){
          let photo = new Photo();
          photo.id = _obj[index]['id'];
          photo.url = _obj[index]['urls']['regular'];
          photo.urlSmall = _obj[index]['urls']['small'];
          this.photos.push(photo);
          index++;
          len--;
        }
        resolve(this.photos);
      })
    });
  }
}
