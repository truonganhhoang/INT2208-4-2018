import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DeckComponent } from './deck/deck.component';
import { LearnComponent } from './learn/learn.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: DeckComponent},
  {path: 'learn', component: LearnComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class RoutingModule { }
