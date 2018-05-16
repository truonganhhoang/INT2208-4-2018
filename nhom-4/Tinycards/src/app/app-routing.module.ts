import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LearnpageComponent } from './learnpage/learnpage.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
    {path:"home", component:HomepageComponent},
    {path:"learn/:type/:id",component:LearnpageComponent},
    {path:"create",canActivate:[UserGuard],component:CreateCardComponent},
    {path:"login",component:LoginpageComponent},    
    {path:"", redirectTo:"home",pathMatch:"full"},
    {path:"**",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash:true})],
  providers: [ UserGuard
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }