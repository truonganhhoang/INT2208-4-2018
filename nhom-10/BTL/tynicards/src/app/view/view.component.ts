import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  deck: any = {};

  constructor(private route: ActivatedRoute, private deckService: DeckService, private location: Location) { }

  ngOnInit() {
    this.deckService.getDeckById(this.route.snapshot.paramMap.get('deckId')).subscribe(data => {
      this.deck = data;
    });
  }
}
