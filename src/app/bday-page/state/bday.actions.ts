import { Action } from "@ngrx/store";
import { Question } from "../models/question.model";

export enum BdayActionTypes {
  Load = '[Bday] Load Questions',
  SuccessLoadQuestions = '[Bday] Load Sucess Questions',
  FailLoadQuestions = '[Bday] Load Fail Questions',
  SetCurrentQuestion = "[Bday] Set Next Question",
  LoadCurrentQuestion = "[Bday] Load Success",
  SaveQuestion = '[Bday] Save Question',
  AddNewBday = '[Bday] Add New Bday',
}

export class LoadQuestions implements Action {
  readonly type = BdayActionTypes.Load;
}


export class SuccessLoadQuestions implements Action {
  readonly type = BdayActionTypes.SuccessLoadQuestions;

  constructor(public payload: Question[]) { }
}


export class FailLoadQuestions implements Action {
  readonly type = BdayActionTypes.FailLoadQuestions;

  constructor(public payload: string) { }
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
  | LoadQuestions
  | SuccessLoadQuestions
  | FailLoadQuestions
  | SetCurrentQuestion
  | LoadCurrentQuestion
  | SaveQuestion
  | AddNewBay;