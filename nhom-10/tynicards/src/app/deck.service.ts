import { Injectable } from '@angular/core';
import { DECKS } from './mock-decks';
import { Deck } from './deck';
import { Lesson } from './lesson';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  getDecks(): Deck[] {
    return DECKS;
  }
  getDeckByID(id: number): Deck {
    for (const deck of DECKS) {
      if(deck.id === id) {
        return deck;
      }
    }
  }
  getLessonByID(deckId: number, lessonId: number) {
    for (const deck of DECKS) {
      if (deck.id === deckId) {
        for (const lesson of deck.lessons) {
          if (lesson.id === lessonId) {
            return lesson;
          }
        }
      }
    }
  }

  constructor() { }
}
