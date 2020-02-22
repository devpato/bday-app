import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question.model';
import { getQuestions } from '../../state';

@Component({
  selector: 'app-bday-form',
  templateUrl: './bday-form.component.html',
  styleUrls: ['./bday-form.component.scss']
})
export class BdayFormComponent{
  @Input() question: Question;
  @Input() questions: Question[];
  @Output() setQuestion = new EventEmitter<Question>();
  newID: number
  month: string
  
  constructor() {}

  prev(): void {
    if( this.question.id !== 0 || this.question.id > 0) {
      this.newID = this.question.id - 1;
      this.setQuestion.emit(this.questions[this.newID]);
    }
  }

  next(): void {
    if(this.question.id <= this.questions.length) {
      this.newID = this.question.id + 1;
      this.setQuestion.emit(this.questions[this.newID]);
    }
  }
}
