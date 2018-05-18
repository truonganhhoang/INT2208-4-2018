import { Component, OnInit } from '@angular/core';
import { DeckService } from '../deck.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  deckId: string;
  lessonOrderNum: string;

  deck: any;

  lessonToLearn: any;
  cardsToLearn: any[];

  isViewing: boolean;
  isCompleted: boolean;

  viewingCard: any;
  questingCard: any;

  question: string;
  answer: string;
  userAnswer = '';

  constructor(private route: ActivatedRoute, private deckService: DeckService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.deckId = this.route.snapshot.paramMap.get('deckId');
    this.lessonOrderNum = this.route.snapshot.paramMap.get('lesson');

    this.deckService.getDeckById(this.deckId).subscribe(data => {

      this.deck = data;
      for (let lesson of this.deck.lessons) {
        if (lesson.orderNum === Number(this.lessonOrderNum)) {
          this.lessonToLearn = lesson;
        }
      }

      this.cardsToLearn = this.lessonToLearn.cards.slice();
      
      this.mixCards(this.cardsToLearn);
      
      for (let card of this.cardsToLearn) {
        card.box = 1;
      }
      for (let card of this.cardsToLearn) {
        if (card.box === 1) {
          this.viewingCard = card;
          this.isViewing = true;
          this.viewingCard.box = 2;
          break;
        }
      }
    });
  }

  mixCards(cards: any []) {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    } 
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
    return;
  }

  nextCard(): void {
    this.viewingCard.box = 2;
    for (let card of this.cardsToLearn) {
      if (card.box === 1) {
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
    this.deckService.updateLesson(this.deck._id , JSON.stringify(this.deck.lessons)).subscribe(data => {
      if (data.success) {
      }
    });
    this.router.navigate(['view/' + this.deckId]);
  }

}
