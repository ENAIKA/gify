import { Component, OnInit } from '@angular/core';
import {environment } from '../../environments/environment';
import {ajax} from 'rxjs/ajax';
declare var $:any
@Component({
  selector: 'app-gif-search',
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css']
})
export class GifSearchComponent implements OnInit {
  key=environment.apiKey
  url=`https://api.giphy.com/v1/gifs/search?api_key=${this.key}&limit=19&q=`
  search= $("#trendGifSearch").val();
  newUrl=this.url.concat(this.search)
  searchedGifArray:any=[];
  constructor(){}
    
  
  
   apiData =ajax(`${this.newUrl}`);
   searchItem(){
   this.apiData.subscribe(res=>{
    let item = 1; 
    while(item <= res.response.data.length)  {
       this.searchedGifArray.push(res.response.data[item].images.downsized.url)
       item++
     }
     console.log(this.searchedGifArray)
     return this.searchedGifArray
    });

  } 
  ngOnInit(){ }
  
}
