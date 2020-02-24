import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as bdayActions from "./bday.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { Question } from '../models/question.model';
import { BdayService } from '../bday.service';

@Injectable()
export class BdayEffects {
    constructor(
        private actions$: Actions,
        private bdayService: BdayService
    ) { }

    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(bdayActions.BdayActionTypes.Load),
        mergeMap((action: bdayActions.LoadQuestions) =>
            this.bdayService.getQuestions().pipe(
                map(
                    (questions: Question[]) => new bdayActions.SuccessLoadQuestions(questions)
                ),
                catchError(err => of(new bdayActions.FailLoadQuestions(err)))
            )
        )
    );

    @Effect()
    resetNewBday$ = this.actions$.pipe(
        ofType(bdayActions.BdayActionTypes.ResetNewBday),
        mergeMap((action: bdayActions.ResetNewBday) => [
            new bdayActions.AddNewBay(),
            new bdayActions.LoadQuestions()
        ])
    );

    @Effect()
    submitBdayForm$ = this.actions$.pipe(
        ofType(bdayActions.BdayActionTypes.SubmitForm),
        mergeMap((action: bdayActions.SubmitForm) => [
            new bdayActions.AddNewBay(),
            new bdayActions.ToggleResults()
        ])
    );

    @Effect()
    DoneBdayForm$ = this.actions$.pipe(
        ofType(bdayActions.BdayActionTypes.DoneForm),
        mergeMap((action: bdayActions.DoneForm) => [
            new bdayActions.LoadQuestions(),
            new bdayActions.DoneClearData()
        ])
    );
}