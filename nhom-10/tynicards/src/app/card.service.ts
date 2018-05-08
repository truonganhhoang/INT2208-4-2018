import { Injectable } from '@angular/core';
import { Card } from './card';

@Injectable()
export class CardService {

  public cards: Card[] = [
    new Card("banana", "chuối"),
    new Card("orange", "cam"),
    new Card("plum", "mận")
  ];
  constructor() { }
  getAllCards(){
    return this.cards;
  }
}
