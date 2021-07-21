import { Component } from '@angular/core';
import { card } from './card/card.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  card = card
  
}
