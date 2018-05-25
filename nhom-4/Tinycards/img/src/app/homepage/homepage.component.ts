import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Output() waitForOtherPage= new EventEmitter<string>();
  goToLearnPage(){
    this.waitForOtherPage.emit('learnPage')
  }
  constructor() { }

  ngOnInit() {
  }

}
