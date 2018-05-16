import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { getCookie, deleteAllCookies } from '../Cookiee';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  
 logedIn:boolean;
 userName:string;

  constructor() { }

  logOut(){
    // console.log("đã logout");
    deleteAllCookies();
    this.logedIn= false;
    window.location.reload();
  }

  ngOnInit() {
    if(getCookie("userName") != null){
      this.logedIn=true;
      this.userName = getCookie("userName");
    }
  }

}
