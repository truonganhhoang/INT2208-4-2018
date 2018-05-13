import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css'],
})
export class CardInputComponent implements OnInit {

  @Input() frontSide: FormGroup;
  constructor() {}
  ngOnInit() {
  }

}
