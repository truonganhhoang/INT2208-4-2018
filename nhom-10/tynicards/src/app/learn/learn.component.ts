import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckService } from '../deck.service';
import { Location } from '@angular/common';
import { Deck } from '../deck';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  deck: Deck;

  constructor(
    private route: ActivatedRoute,
    private deckService: DeckService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deck = this.deckService.getDeckByID(id);
  }

}
