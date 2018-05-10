import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-learnpage',
  templateUrl: './learnpage.component.html',
  styleUrls: ['./learnpage.component.css'],
  providers:[DataService]
})
export class LearnpageComponent implements OnInit {
  @Output() waitForOtherPage = new EventEmitter<string>();
  cards: any[];
  i = 0; //currentCard
  isFront:boolean=true;
  theFront: string = "This is the front of this card";
  theBack: string = "This is the back of this card";
  isImgF: boolean;
  isImgB: boolean;
  flip(){
    this.isFront= !this.isFront;
    console.log("fliped")
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
    this.updateCard()
  }
  updateCard() {
    console.log(this.i);
    this.isFront = true;
    if (this.cards != undefined) {
      let imageFront = document.getElementById("imgFront") as HTMLImageElement;
      imageFront.src = this.cards[this.i].front;
      this.theBack = this.cards[this.i].back;
      this.isImgF = (this.cards[this.i].typeFront === 'img') ? true : false;
      this.isImgB = (this.cards[this.i].typeBack === 'img') ? true : false;
    } else {
      this.i = -1;
    }
    
  }

  constructor(private route: ActivatedRoute, private dataService: DataService) {}
  ngOnInit() {
    let cardID =parseInt(this.route.snapshot.paramMap.get("id"));
    this.cards = this.dataService.Cards[cardID -1].content;
  }

}
