import { Component, OnInit,Output, EventEmitter,Input } from '@angular/core';

@Component({
  selector: 'app-learnpage',
  templateUrl: './learnpage.component.html',
  styleUrls: ['./learnpage.component.css']
})
export class LearnpageComponent implements OnInit {
  @Output() waitForOtherPage = new EventEmitter<string>();
  @Input() cards: any[];
  isFront = true;
  isBack = false;
  i = 0;
  // cards=this.cardArray;
  theFront: string = "this is the front";
  theBack: string = "this is the back";
  isImgF: boolean;
  isImgB: boolean;
  flipThis() {
    this.isBack = !this.isBack;
    this.isFront = !this.isFront;
    console.log(this.isImgF);
  }
  nextCard() {
    if (this.i >= this.cards.length - 1) {
      return;
    } else {
      this.i = this.i + 1;
    }
    this.updateCard();
  }
  backCard() {
    if (this.i <= 0) {
      return;
    } else {
      this.i = this.i - 1;
    }
    this.updateCard();

  }
  updateCard() {
    console.log(this.i);
    if (this.cards != undefined) {
      this.isFront = true;
      this.isBack = false;
      this.theFront = this.cards[this.i].front;
      this.theBack = this.cards[this.i].back;
      this.isImgF = (this.cards[this.i].typeFront === 'img') ? true : false;
      this.isImgB = (this.cards[this.i].typeBack === 'img') ? true : false;
    } else {
      this.i = -1;
    }
    // console.log("da vao big card");
    // console.log(this.cardArray);
  }
  
  goToHomePage(){
    this.waitForOtherPage.emit('homePage');
  }
  flip(){
    
  }

  constructor() {
    console.log("da vao learn page");
    console.log(this.cards);
   }

  ngOnInit() {
  }

}
