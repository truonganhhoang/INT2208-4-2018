import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Deck } from '../deck';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  deck: Deck ;

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
