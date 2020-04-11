import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GifyServiceService {
  
  constructor(private httpClient:HttpClient) {}
    getData():Observable<any>{
    return this.httpClient.get<any>("https://api.giphy.com/v1/gifs/trending?api_key=pjR3uS09gufHTypKbwNCzorocADyK0y2&limit=20")
   }
  
}
   