import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { ViewComponent } from './view/view.component';
import { LearnComponent } from './learn/learn.component';
import { EditComponent } from './edit/edit.component';
import { CardComponent } from './card/card.component';
import { DeckService } from './deck.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    LearnComponent,
    EditComponent,
    CardComponent,
    NavbarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DeckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
