import { Action } from "@ngrx/store";
import { Question } from "../models/question.model";

export enum BdayActionTypes {
  SetCurrentQuestion = "[Question] Set Next Cuestion",
  LoadCurrentQuestion = "[Question] Load Success",
}

export class SetCurrentQuestion implements Action {
  readonly type = BdayActionTypes.SetCurrentQuestion;

  constructor(public payload: Question) {}
}

export class LoadCurrentQuestion implements Action {
  readonly type = BdayActionTypes.LoadCurrentQuestion;
}


export type BdayActions =
  | SetCurrentQuestion
  | LoadCurrentQuestion;