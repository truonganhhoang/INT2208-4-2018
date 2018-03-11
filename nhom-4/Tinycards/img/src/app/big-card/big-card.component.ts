import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  imageLink:string="img.jpeg";
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  constructor() {
   }

}
