import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GifyServiceService } from '../services/gify-service.service';
import { Gifs } from '../gifs'
import { Router } from '@angular/router';

@Component({
  selector: 'app-gify',
  templateUrl: './gify.component.html',
  styleUrls: ['./gify.component.css']
})
export class GifyComponent implements OnInit {
  
  gifs: Gifs;
  imagesArray: any=[];
  
  constructor( private http: HttpClient, private gifyService:GifyServiceService, private router:Router) { }

  ngOnInit() {
    
    this.gifyService.getData().subscribe(content => {
      // Succesful API request
      this.gifs = new Gifs(content.data)
     let item = 1; 
     while(item <= this.gifs.data.length)  {
        this.imagesArray.push(this.gifs.data[item].images.downsized.url)
        item++
      }
      console.log(this.imagesArray)
      return this.imagesArray
    })
  }
}
