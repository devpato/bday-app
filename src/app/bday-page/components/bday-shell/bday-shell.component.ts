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


  constructor(private store: Store<fromProduct.State>, private bdayService: BdayService) { }

  ngOnInit(): void {
    this.store.dispatch(new bdayActions.LoadQuestions);
    this.questions$ = this.store.pipe(select(fromProduct.getQuestions));
    this.question$ = this.store.pipe(select(fromProduct.getCurrentQuestion));
  }

  setCurrentQuestion(question: Question): void {
    this.store.dispatch(new bdayActions.SetCurrentQuestion(question));
  }

  saveQuestion(question: Question): void {
    this.store.dispatch(new bdayActions.SaveQuestion(question));
  }

  addNewBday(): void {
    this.store.dispatch(new bdayActions.AddNewBay());
    this.store.dispatch(new bdayActions.LoadQuestions);
  }
}
