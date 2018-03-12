import { Component, Output, EventEmitter,Input } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Output() userClick= new EventEmitter();
  cardID="001";
  @Input() cardTitle:string;
  @Input() linkToImg:string;
  showLearnPage(){
    this.userClick.emit(this.cardID);
  }
   
  constructor() { }

}
