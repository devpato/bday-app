import { Action } from "@ngrx/store";
import { Question } from "../models/question.model";

export enum BdayActionTypes {
  SetCurrentQuestion = "[Question] Set Next Cuestion",
  LoadCurrentQuestion = "[Question] Load Success",
  SaveQuestion = '[Question] Save Question',
  AddNewBday = '[Question] Add New Bday',
}

export class SetCurrentQuestion implements Action {
  readonly type = BdayActionTypes.SetCurrentQuestion;

  constructor(public payload: Question) { }
}

export class LoadCurrentQuestion implements Action {
  readonly type = BdayActionTypes.LoadCurrentQuestion;
}

export class SaveQuestion implements Action {
  readonly type = BdayActionTypes.SaveQuestion;

  constructor(public payload: Question) { }
}

export class AddNewBay implements Action {
  readonly type = BdayActionTypes.AddNewBday;
}


export type BdayActions =
  | SetCurrentQuestion
  | LoadCurrentQuestion
  | SaveQuestion
  | AddNewBay;