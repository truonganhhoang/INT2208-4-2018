import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  decks: any = [];

  constructor(private deckService: DeckService) { }

  ngOnInit() {
    this.deckService.getDecks().subscribe(data => {
      this.decks = data;
    });
  }

}
