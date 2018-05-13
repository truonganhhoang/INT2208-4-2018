import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { LearnpageComponent } from './learnpage/learnpage.component';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
    {path:"home", component:HomepageComponent},
    {path:"profile",component:ProfilepageComponent},
    {path:"learn/:id",component:LearnpageComponent},
    {path:"create",component:CreateCardComponent},
    {path:"", redirectTo:"home",pathMatch:"full"},
    {path:"**",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  providers: [
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }