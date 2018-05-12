import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers:[DataService]
})
export class HomepageComponent implements OnInit {
  errServer: boolean;
  @Output() waitForOtherPage= new EventEmitter<string>();
  
  constructor( private dataService : DataService) { }
  Cards:any;
  ngOnInit() {
    this.dataService.getListCardCollection().then(
      res => {
        this.Cards= res;
      }
    )
    .catch(e => {
      this.errServer = true
    })
  }

}
