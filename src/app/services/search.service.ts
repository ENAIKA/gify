import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
// import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  images: any;
  stickerArray: any[];
  
  url: string = "https://api.giphy.com/v1/gifs/trending?api_key=pjR3uS09gufHTypKbwNCzorocADyK0y2&limit=19"

  constructor(private http: HttpClient) { }
  

  
  //   // Create an Observable that will create an AJAX request
  //   const apiData = ajax('https://api.giphy.com/v1/gifs/trending?api_key=pjR3uS09gufHTypKbwNCzorocADyK0y2&limit=19');
  //   // Subscribe to create the request
  //   apiData.subscribe(res => {
  //     res.response.data    
  //   });
  // }
  getSearchArray():Observable<any>{
    

    return this.http.get<any>("https://api.giphy.com/v1/stickers/trending?api_key=pjR3uS09gufHTypKbwNCzorocADyK0y2&limit=19")
     
  }
}