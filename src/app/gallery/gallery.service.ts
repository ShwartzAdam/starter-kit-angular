import { Injectable } from '@angular/core';
import {Observable} from "rxjs/index";
import {HttpClient} from "@angular/common/http";

export interface Image {
  albumId: number,
  id: number,
  title: string,
  url: string,
  thumbnailUrl: string
}
@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  url :string = 'http://localhost:3000/photos';

  constructor(private httpClient: HttpClient) { }

  getImagesSec(): Observable<Image[]> {
    return this.httpClient
      .get<Image[]>(this.url)


  }
}
