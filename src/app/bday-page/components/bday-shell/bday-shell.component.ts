import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../models/question.model'
import { Store, select } from "@ngrx/store";
import * as fromProduct from "../../state";
import * as bdayActions from "../../state/bday.actions";

@Component({
  selector: 'app-bday-shell',
  templateUrl: './bday-shell.component.html',
  styleUrls: ['./bday-shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BdayShellComponent implements OnInit {
  question$: Observable<Question>;
  questions$: Observable<Question[]>;
  setQuestion: Question;


  constructor(private store: Store<fromProduct.State>) { }

  ngOnInit(): void {
    this.question$ = this.store.pipe(select(fromProduct.getCurrentQuestion));
    this.questions$ = this.store.pipe(select(fromProduct.getQuestions));
  }

  setCurrentQuestion(question: Question): void {
    this.store.dispatch(new bdayActions.SetCurrentQuestion(question));
  }

  saveQuestion(question: Question): void {
    this.store.dispatch(new bdayActions.SaveQuestion(question));
  }

  addNewBday(): void {
    this.store.dispatch(new bdayActions.AddNewBay())
  }
}
