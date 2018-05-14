import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { getCookie } from '../Cookiee';

@Component({
  selector: 'app-learnpage',
  templateUrl: './learnpage.component.html',
  styleUrls: ['./learnpage.component.css'],
  providers: [DataService]
})
export class LearnpageComponent implements OnInit {
  favorite:boolean=false;
  cardID:string;
  addToFavorite(){
    this.dataService.addFavorite(getCookie("userName"),this.cardID)
    .then(r => {
      if(r){
        this.favorite=true;
      }
    }).catch(e => this.favorite=false);
  }
  removeOfFavorite(){
    this.dataService.removeFavorite(getCookie("userName"),this.cardID)
    .then(r => {
      if(r){
        this.favorite=false;
      }
    }).catch(e => this.favorite=true);
  }
  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  ngOnInit() {
    this.cardID = this.route.snapshot.paramMap.get("id");
    let type =this.route.snapshot.paramMap.get("type");
    this.favorite=(type =="collection")?false:true;
    this.dataService.getCardCollection(this.cardID)
      .then(res => {
        this.cards = res;
        this.sizeCards = res.length;
        this.update(res[0]);
      }
      )
      .catch(err => {
        console.log(err);
      }
      )
  }
  cards: any;
  front:string="Đây là mặt trước";
  back:string="Đây là mặt sau";
  typeFront:string="text";
  typeBack:string="text";
  isFront:boolean;
  sizeCards:number;
  current:number=1;

  nextCard(){
      this.current ++;
      this.update(this.cards[this.current]);
  };
  backCard(){
    this.current --;
    this.update(this.cards[this.current]);
  };

  update(card){
    this.front = card.front;
    this.back = card.back;
    this.typeFront=card.typeFront;
    this.typeBack=card.typeBack;
  }

}
