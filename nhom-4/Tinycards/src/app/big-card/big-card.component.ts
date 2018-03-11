import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  isShow=true;
  i=0;
  cards=[
    {back:'Tao', front:'Apple'},
    {back:'Qua Tao',front:'van la Apple'}
  ]
  theFront:string=this.cards[this.i].back;
  theBack:string=this.cards[this.i].front;
  flipThis(){
    this.isShow=!this.isShow;
  }
  nextCard(){
    if(this.i>=this.cards.length-1){
      this.i=0;
    }else{
      this.i++;
    }
    this.isShow=true;
    this.theFront = this.cards[this.i].back;
    this.theBack = this.cards[this.i].front;
    console.log(this.i);
  }
  constructor() {
   }

}
