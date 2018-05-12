import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-learnpage',
  templateUrl: './learnpage.component.html',
  styleUrls: ['./learnpage.component.css'],
  providers: [DataService]
})
export class LearnpageComponent implements OnInit {
  @Output() waitForOtherPage = new EventEmitter<string>();

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  ngOnInit() {
    let cardID = parseInt(this.route.snapshot.paramMap.get("id"));
    this.dataService.getCardCollection(cardID)
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
  front:string;
  back:string="this is the back";
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
  }

}
