import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnChanges {

  @Input() card: Card;

  question: string;
  answer: string;

  createQnA(): void {
    if (Math.round(Math.random()) === 1) {
      this.question = this.card.front;
      this.answer = this.card.back;
    } else {
      this.question = this.card.back;
      this.answer = this.card.front;
    }
  }

  ngOnChanges() {
    this.createQnA();
   }

  constructor() {  }

  ngOnInit() {
    this.createQnA();
  }

}
