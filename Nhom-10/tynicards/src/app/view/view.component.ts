import { Component, OnInit } from '@angular/core';
import { Deck } from '../deck';
import { Card } from '../card';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

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
