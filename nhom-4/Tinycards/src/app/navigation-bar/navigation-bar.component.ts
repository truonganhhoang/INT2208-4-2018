import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  @Output() waitForOtherPage = new EventEmitter(); 
  goToProfilePage(){
    this.waitForOtherPage.emit('profile');
  }
  goToHomePage(){
    this.waitForOtherPage.emit('homepage');
  }

  constructor() { }

  ngOnInit() {
  }

}
