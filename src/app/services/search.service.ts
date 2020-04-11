import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SearchService {
  images: any;
  stickerArray: any[];
  key=environment.apiKey

  constructor(private http: HttpClient) { }
  getSearchArray():Observable<any>{
    

    return this.http.get<any>(`https://api.giphy.com/v1/stickers/trending?api_key=${this.key}&limit=19`)
     
  }
}