import { Injectable } from '@angular/core';
import { DECKS } from './mock-decks';
import { Deck } from './deck';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  getDecks(): Deck[] {
    return DECKS;
  }
  
  getDeckByID(id: number): Deck {
    for(let deck of DECKS) {
      if(deck.id === id) {
        return deck;
      }
    }
  }

  constructor() { }
}
