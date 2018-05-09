import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeckService } from '../deck.service';
import { Location } from '@angular/common';
import { Deck } from '../deck';
import { Lesson } from '../lesson';
import { Card } from '../card';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {

  deck: Deck;
  lesson: Lesson;
  cardsToLearn: Card[];

  isViewing: boolean;
  isCompleted: boolean;

  viewingCard: Card;
  questingCard: Card;

  question: string;
  answer: string;
  userAnswer = '';

  mixCards(cards: Card[]): Card[] {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  }

  initQuestion(): void {
    console.log('init quest!');
    for (let card of this.cardsToLearn) {
      if (card.box === 2) {
        this.questingCard = card;
        if (Math.round(Math.random()) === 1) {
          this.question = this.questingCard.front;
          this.answer = this.questingCard.back;
        } else {
          this.question = this.questingCard.back;
          this.answer = this.questingCard.front;
        }
        console.log(this.question);
        console.log(this.answer);
        break;
      }
    }
  }

  checkAnswer(): void {
    if (this.userAnswer === this.answer) {
      this.questingCard.box = 3;
      console.log('right');
    } else {
      console.log('wrong!');
    }
    this.userAnswer = '';
    console.log('next quest');
    this.nextQuestingCard();
    
  }

  nextQuestingCard(): void {
    this.mixCards(this.cardsToLearn); 
    for (let card of this.cardsToLearn) {
      if (card.box === 2) {
        console.log('have quest!');
        this.questingCard = card;
        if (Math.round(Math.random()) === 1) {
          this.question = this.questingCard.front;
          this.answer = this.questingCard.back;
        } else {
          this.question = this.questingCard.back;
          this.answer = this.questingCard.front;
        }
        console.log(this.question);
        console.log(this.answer);
        return;
      }
      console.log(this.question);
      console.log(this.answer);
      
    }
    this.isCompleted = true;
    console.log('no quest!');
    return;
  }

  nextCard(): void {
    this.viewingCard.box = 2;
    for (let card of this.cardsToLearn) {
      if (card.box === 1) {
        console.log('have a card');
        this.viewingCard = card;
        return;
      }
    }
    console.log('end viewing!');
    this.mixCards(this.cardsToLearn);
    this.initQuestion();
    this.isViewing = false;
    return;
  }

  saveData() {
    this.lesson.cards = this.cardsToLearn;
    console.log('saved data');
  }

  constructor(
    private route: ActivatedRoute,
    private deckService: DeckService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    const lessonId = +this.route.snapshot.paramMap.get('lessonId');
    this.deck = this.deckService.getDeckByID(id);
    this.lesson = this.deckService.getLessonByID(id, lessonId);
    this.cardsToLearn = this.lesson.cards.slice();
    this.mixCards(this.cardsToLearn);
    this.isViewing = false;
    this.isCompleted = false;
    for (let card of this.cardsToLearn) {
      card.box = 1;
    }
    for (let card of this.cardsToLearn) {
      console.log('have a card');
      if (card.box === 1) {
        this.viewingCard = card;
        this.isViewing = true;
        this.viewingCard.box = 2;
        break;
      }
    }
  }

}
