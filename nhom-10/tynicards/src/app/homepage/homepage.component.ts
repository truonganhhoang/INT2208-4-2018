import { Component, OnInit } from '@angular/core';
import { Deck } from './../deck';
import { DeckService } from './../deck.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  decks: Deck[];

  // newDeckID = '10';

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.decks = this.deckService.getDecks();
  }

}
