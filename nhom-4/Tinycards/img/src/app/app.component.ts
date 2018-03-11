import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHomePage = true;
  isLearnPage = false;
  goTo(page: string) {
    if (page === 'learnPage') {
      this.isHomePage = false;
      this.isLearnPage = true;
    }
    if (page === 'homePage') {
      this.isHomePage = true;
      this.isLearnPage = false;
    }

  }
  
}
