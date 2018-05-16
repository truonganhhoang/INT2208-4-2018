import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  deckId: string;
  deck: any;
  cardsToEdit: any[];
  cardsToAdd: any[];
  title: string;
  description: string;

  newFront: string;
  newBack: string;

  constructor(private route: ActivatedRoute, private deckService: DeckService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.deckId = this.route.snapshot.paramMap.get('deckId');
    this.deckService.getDeckById(this.deckId).subscribe(data => {
      this.deck = data;
      this.title = this.deck.title;
      this.description = this.deck.description;
      let i, j = 0;
      for (let lesson of this.deck.lessons) {
        for (i = 0; i < lesson.cards.length; ++i) {
          this.cardsToEdit[j] = lesson.cards[i];
          ++j;
        }
      }
    });
  }

}
