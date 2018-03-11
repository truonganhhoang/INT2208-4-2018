import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-learnpage',
  templateUrl: './learnpage.component.html',
  styleUrls: ['./learnpage.component.css']
})
export class LearnpageComponent implements OnInit {
  @Output() waitForOtherPage = new EventEmitter<string>();
  goToHomePage(){
    this.waitForOtherPage.emit('homePage');
  }
  flip(){
    
  }

  constructor() { }

  ngOnInit() {
  }

}
