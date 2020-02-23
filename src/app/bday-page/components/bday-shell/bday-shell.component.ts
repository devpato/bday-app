import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../../models/question.model'
import { Store, select } from "@ngrx/store";
import * as fromProduct from "../../state";
import * as bdayActions from "../../state/bday.actions";
import { BdayService } from '../../bday.service';

@Component({
  selector: 'app-bday-shell',
  templateUrl: './bday-shell.component.html',
  styleUrls: ['./bday-shell.component.scss'],
})
export class BdayShellComponent implements OnInit {
  question$: Observable<Question>;
  questions$: Observable<Question[]>;
  setQuestion: Question;
  newBdayAnswer$: Observable<boolean>;

  newBdayQuestion = {
    "id": 0,
    "question": "Want to add a new bday?",
    "answer": "",
    "type": "newBday"
  }


  constructor(private store: Store<fromProduct.State>, private bdayService: BdayService) { }

  ngOnInit(): void {
    this.store.dispatch(new bdayActions.LoadQuestions);
    this.questions$ = this.store.pipe(select(fromProduct.getQuestions));
    this.question$ = this.store.pipe(select(fromProduct.getCurrentQuestion));
    this.newBdayAnswer$ = this.store.pipe(select(fromProduct.getAnswerNewBdayQuestion));
  }

  setCurrentQuestion(question: Question): void {
    this.store.dispatch(new bdayActions.SetCurrentQuestion(question));
  }

  saveQuestion(question: Question): void {
    this.store.dispatch(new bdayActions.SaveQuestion(question));
  }

  addNewBday(): void {
    this.store.dispatch(new bdayActions.SetCurrentQuestion(this.newBdayQuestion));
  }

  addNewBdayAnswer(flag: boolean): void {
    if (flag) {
      this.store.dispatch(new bdayActions.ResetNewBday())
    } else {
      this.onDone();
    }
  }

  onDone(): void {
    this.store.dispatch(new bdayActions.ClearBdayFrom())
  }
}
