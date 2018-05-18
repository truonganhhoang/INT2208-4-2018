import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { OcticonDirective } from './octicon.directive';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { DeckService } from './deck.service';
import { ViewComponent } from './view/view.component';
import { LearnComponent } from './learn/learn.component';

@NgModule({
  declarations: [
    AppComponent,
    OcticonDirective,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    EditComponent,
    CreateComponent,
    ProfileComponent,
    LogoutComponent,
    NavbarComponent,
    ViewComponent,
    LearnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        path: '',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'create',
        component: CreateComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'view/:deckId',
        component: ViewComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'learn/:deckId/:lesson',
        component: LearnComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'edit/:deckId',
        component: EditComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  providers: [AuthService, AuthGuard, DeckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
