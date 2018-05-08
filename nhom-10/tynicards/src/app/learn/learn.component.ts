import { Component, OnInit } from '@angular/core';
import { Card } from './../card';
import { CardService } from './../card.service';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  public cards: Card[]=[];
  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.cards = this.cardService.getAllCards();
    console.log(this.cards);
  }

}
