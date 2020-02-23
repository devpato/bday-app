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
  ResetNewBday = '[Bday] Reset form for new bday',
  ClearBdayFrom = '[Bday] Clear entire form',
  ClearBdayData = '[Bday] Clear entire data',
  NewBdayQuestion = '[Bday] Ask if user wants to add a new bday'
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

export class ResetNewBday implements Action {
  readonly type = BdayActionTypes.ResetNewBday;
}

export class ClearBdayFrom implements Action {
  readonly type = BdayActionTypes.ClearBdayFrom;
}

export class ClearBdayData implements Action {
  readonly type = BdayActionTypes.ClearBdayData;
}

export class NewBdayQuestion implements Action {
  readonly type = BdayActionTypes.NewBdayQuestion;

  constructor(public payload: boolean) { }
}



export type BdayActions =
  | LoadQuestions
  | SuccessLoadQuestions
  | FailLoadQuestions
  | SetCurrentQuestion
  | LoadCurrentQuestion
  | SaveQuestion
  | AddNewBay
  | ResetNewBday
  | ClearBdayFrom
  | ClearBdayData
  | NewBdayQuestion;