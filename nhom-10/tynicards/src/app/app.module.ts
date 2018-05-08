import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DeckComponent } from './deck/deck.component';
import { RoutingModule } from './routing.module';
import { CardService } from './card.service';
import { LearnComponent } from './learn/learn.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DeckComponent,
    LearnComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [CardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
