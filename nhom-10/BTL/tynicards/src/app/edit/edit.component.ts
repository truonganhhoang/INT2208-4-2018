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
  allCards = [];

  message = '';

  title: string;
  description: string;

  newFront = '';
  newBack = '';

  constructor(private route: ActivatedRoute, private deckService: DeckService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.deckId = this.route.snapshot.paramMap.get('deckId');
    this.deckService.getDeckById(this.deckId).subscribe(data => {
      this.deck = data;
      this.title = this.deck.title;
      this.description = this.deck.description;
      this.updateAllCards();
    });
  }

  saveChanges() {
    if (this.title === '') {
      this.message = 'Tiêu đề bộ thẻ không được để trống.';
    } else {
      this.deck.title = this.title;
      this.deck.description = this.description;
      if (this.allCards.length < 3) {
        this.message = 'A deck must have at least 3 cards! Please add more.';
      } else {
        this.deckService.updateDeck(this.deck._id , this.title, this.description, JSON.stringify(this.deck.lessons)).subscribe(data => {
          if (data.success) {
          }
        });
        this.router.navigate(['view/' + this.deckId]);
      }
    }
    // this.router.navigate...
  }

  addCard() {

    if(this.newFront === '' || this.newBack === '') {
      this.message = 'Can not add a blank card!';
    } else {

      for (let i = 0; i < this.allCards.length; ++i) {
        if (this.allCards[i].front === this.newFront
        && this.allCards[i].back  === this.newBack) {
          this.message = 'This card exists!';
          return;
        }
      }

      let isAdded = false;
      let newCard = {front: this.newFront, back: this.newBack, box: 0};
      for (let lesson of this.deck.lessons) {
        if (lesson.cards.length < 5) {
          lesson.cards.push(newCard);
          isAdded = true;
          break;
        }
      }
      if (!isAdded) {
        let newLesson = {orderNum: this.deck.lessons.length + 1, cards: []};
        newLesson.cards.push(newCard);
        if (this.deck.lessons.length === 0) {
        } else {
          let len = this.deck.lessons.length;
          newLesson.cards.push(this.deck.lessons[len - 1].cards[4]);
          this.deck.lessons[0].cards.splice(4, 1);
          newLesson.cards.push(this.deck.lessons[len - 1].cards[3]);
          this.deck.lessons[0].cards.splice(3, 1);
        }
        this.deck.lessons.push(newLesson);
      }
      this.updateAllCards();
      this.newFront = '';
      this.newBack  = '';
    }
  }

  deleteCard(cardToDelete) {
    for (let lesson of this.deck.lessons) {
      let isDeleted = false;
      let i = 0;
      for (let card of lesson.cards) {
        if (card.front === cardToDelete.front) {
          lesson.cards.splice(i, 1);
          isDeleted = true;
          break;
        }
        ++i;
      }
      if (isDeleted) {
        break;
      }
    }

    // optimizing lessons

    this.updateAllCards();
  }
  
  deleteDeck() {
    this.deckService.deleteDeck(this.deckId).subscribe(data => {
      //
    });
  }

  updateAllCards() {
    this.allCards.splice(0, this.allCards.length);
    for (let lesson of this.deck.lessons) {
      for (let card of lesson.cards) {
        this.allCards.push(card);
      }
    }
  }

}
