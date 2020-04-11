import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Gifs } from '../gifs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-gifs',
  templateUrl: './search-gifs.component.html',
  styleUrls: ['./search-gifs.component.css']
})
export class SearchGifsComponent implements OnInit {
  gifs: Gifs;
  searchedArray: any = [];
  constructor(private searchService: SearchService, private route:Router) { }

  ngOnInit() {
    this.searchService.getSearchArray().subscribe(res=>{
      let item = 1; 
     while(item <= res.data.length)  {
        this.searchedArray.push(res.data[item].images.downsized.url)
        item++
      }
      console.log(this.searchedArray)
      return this.searchedArray
    })
    

  }

}
