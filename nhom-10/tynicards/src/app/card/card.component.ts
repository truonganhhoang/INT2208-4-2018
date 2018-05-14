import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  text: string;

  changeText(): void {
    if (this.text === this.card.front) {
      this.text = this.card.back;
    } else {
      this.text = this.card.front;
    }
  }

  constructor() { }

  ngOnInit() {
    this.text = this.card.front;
  }

}
