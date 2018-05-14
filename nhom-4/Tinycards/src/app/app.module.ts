import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { CardComponent } from './card/card.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LearnpageComponent } from './learnpage/learnpage.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateCardComponent } from './create-card/create-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginpageComponent } from './loginpage/loginpage.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    CardComponent,
    HomepageComponent,
    LearnpageComponent,
    CreateCardComponent,
    LoginpageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
