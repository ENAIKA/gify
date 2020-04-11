import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GifyServiceService {
  key=environment.apiKey
  url=`https://api.giphy.com/v1/gifs/trending?api_key=${this.key}&limit=20`
  constructor(private httpClient:HttpClient) {}
    getData():Observable<any>{
    return this.httpClient.get<any>(this.url)
   }
  
}
   