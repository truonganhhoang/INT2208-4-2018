import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import { Deck } from '../deck';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  decks: Deck[];

  newDeckID = '10';

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.decks = this.deckService.getDecks();
  }

}
