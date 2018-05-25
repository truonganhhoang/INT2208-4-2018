import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DeckService } from '../deck.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  deckId = '';
  deck = {};

  lessons = [];

  allCards = [];

  message = '';

  title = '';
  description = '';

  newFront = '';
  newBack = '';

  constructor(private route: ActivatedRoute, private deckService: DeckService, private location: Location, private router: Router) { }

  ngOnInit() {
    this.updateAllCards();
  }

  saveDeck() {
    if (this.title === '') {
      this.message = 'Tiêu đề bộ thẻ không được để trống.';
    } else {
      if (this.allCards.length < 3) {
        this.message = 'Một bộ thẻ cần có ít nhất 3 thẻ khởi đầu.';
      } else {
        this.deckService.newDeck(this.title, this.description, JSON.stringify(this.lessons)).subscribe(data => {
          if (data.success) {
            console.log('new deck added')
          }
          this.deckId = data.deckId;
          this.router.navigate(['view/' + this.deckId]);
        });
      }
    }
    // this.router.navigate...
  }

  addCard() {

    if(this.newFront === '' || this.newBack === '') {
      this.message = 'Không được thêm một thẻ trống.';
    } else {

      for (let i = 0; i < this.allCards.length; ++i) {
        if (this.allCards[i].front === this.newFront
        && this.allCards[i].back  === this.newBack) {
          this.message = 'Thẻ này đã tồn tại';
          return;
        }
      }

      let isAdded = false;
      let newCard = {front: this.newFront, back: this.newBack, box: 0};
      for (let lesson of this.lessons) {
        if (lesson.cards.length < 5) {
          lesson.cards.push(newCard);
          isAdded = true;
          break;
        }
      }
      if (!isAdded) {
        let newLesson = {orderNum: this.lessons.length + 1, cards: []};
        newLesson.cards.push(newCard);
        if (this.lessons.length === 0) {
        } else {
          let len = this.lessons.length;
          newLesson.cards.push(this.lessons[len - 1].cards[4]);
          this.lessons[0].cards.splice(4, 1);
          newLesson.cards.push(this.lessons[len - 1].cards[3]);
          this.lessons[0].cards.splice(3, 1);
        }
        this.lessons.push(newLesson);
      }
      this.updateAllCards();
      this.newFront = '';
      this.newBack  = '';
    }
  }

  deleteCard(cardToDelete) {
    for (let lesson of this.lessons) {
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
  

  updateAllCards() {
    this.allCards.splice(0, this.allCards.length);
    for (let lesson of this.lessons) {
      for (let card of lesson.cards) {
        this.allCards.push(card);
      }
    }
  }

}
