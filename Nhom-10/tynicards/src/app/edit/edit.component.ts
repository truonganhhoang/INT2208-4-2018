import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckService } from '../deck.service';
import { Deck } from '../deck';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  deck: Deck;

  title: string;
  description: string;

  save() {
    this.deck.title = this.title;
    this.deck.description = this.description;
  }

  constructor(
    private route: ActivatedRoute,
    private deckService: DeckService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.deck = this.deckService.getDeckByID(id);
    this.title = this.deck.title;
    this.description = this.deck.description;
  }

}
