import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { getCookie } from '../Cookiee';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers:[DataService]
})
export class HomepageComponent implements OnInit {
  errServer: boolean;
  logedIn:boolean;
  
  constructor( private dataService : DataService) { }
  Cards:any;
  FavoriteCards:any;
  ngOnInit() {
    this.logedIn =(getCookie("userName") != null)?true:false
    this.dataService.getListCardCollection().then(
      res => {
        // console.log(res);
        this.Cards= res;
      }
    )
    .catch(e => {
      this.errServer = true
    })
    if(this.logedIn){

    this.dataService.getListFavoriteCollection()
    .then(
      res => {
        // console.log(res);
        this.FavoriteCards = res;
      }
    )
    .catch(e => {
      this.errServer = true
    })
  }
    
  }

}
