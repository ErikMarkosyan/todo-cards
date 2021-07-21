import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { card } from './card/card.component';
import { SharedComponent } from './shared/shared.component';
import { AddCardComponent } from './add-card/add-card.component';
import { TodoCardsComponent } from './todo-cards/todo-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    AddCardComponent,
    TodoCardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
