import { Component, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Output() userClick= new EventEmitter();
  showLearnPage(){
    this.userClick.emit(true);
  }
   
  constructor() { }

}
