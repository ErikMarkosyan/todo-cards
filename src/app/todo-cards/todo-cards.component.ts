import { Component, Input, OnInit } from '@angular/core';
import { card } from '../card/card.component'
@Component({
  selector: 'app-todo-cards',
  templateUrl: './todo-cards.component.html',
  styleUrls: ['./todo-cards.component.css']
})
export class TodoCardsComponent implements OnInit {
  @Input() person: string = "";
  @Input() task: string = "";
  @Input() deadline: string = "";
  @Input() index!: number ;

  card = card
 
  constructor() { }

  ngOnInit(): void {
  }
  handleDelete(index: number){
    this.card.splice(index,1)
  }
}
