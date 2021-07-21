import { Component, OnInit, Input } from '@angular/core';
import { card } from '../card/card.component'

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  card = card
  person: string = '';
  task: string = '';
  deadline: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  onInput(event?: any){
    this.person = event.target.value
  }

  addToDo(){
    this.card.push({person: this.person, task: this.task, deadline: this.deadline,})
  }

}
