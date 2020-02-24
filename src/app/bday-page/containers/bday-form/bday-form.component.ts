import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Question } from '../../models/question.model';
import { getQuestions } from '../../state';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Store, select } from '@ngrx/store';
import * as fromProduct from "../../state";
import * as bdayActions from "../../state/bday.actions";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-bday-form',
  templateUrl: './bday-form.component.html',
  styleUrls: ['./bday-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BdayFormComponent implements OnInit {

  @Input() question: Question;
  @Input() questions: Question[];
  @Input() answerNewQuestion: boolean;
  @Output() setQuestion = new EventEmitter<Question>();
  @Output() savedQuestion = new EventEmitter<Question>();
  @Output() addNewBday = new EventEmitter();
  @Output() newBdayQuestion = new EventEmitter<boolean>();
  @Output() done = new EventEmitter();

  newID: number
  questionForm: FormGroup;
  tempQuestion: Question;

  constructor(private fb: FormBuilder, private store: Store<fromProduct.State>) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      answer: ['', Validators.required]
    });
  }

  prev(): void {
    if (this.question.id !== 0 || this.question.id > 0) {
      this.saveAnswer();
      this.newID = this.question.id - 1;
      this.setQuestion.emit(this.questions[this.newID]);
    }
  }

  next(): void {
    if (this.question.id <= this.questions.length) {
      this.saveAnswer();
      this.newID = this.question.id + 1;
      this.setQuestion.emit(this.questions[this.newID]);
    }
  }

  saveAnswer(): void {
    this.question.answer = this.questionForm.get('answer').value;
    this.savedQuestion.emit(this.question);
  }

  onAddNewBday(): void {
    this.saveAnswer();
    this.addNewBday.emit();
  }

  onNewBday(flag: boolean): void {
    this.newBdayQuestion.emit(flag);
  }

  onDone(): void {
    this.saveAnswer();
    this.done.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.questionForm !== undefined && changes.question !== undefined) {
      this.question = changes.question.currentValue;
      this.questionForm.patchValue({ answer: this.question?.answer })

      if (this.question?.type === 'birthDay') {
        const month = changes.questions.currentValue[1].answer
        this.addMonthNameToDayQuestion(month);
      }
    }
  }

  addMonthNameToDayQuestion(month: string) {
    this.question.question = `What day in ${month} were you born?`;
  }
}
