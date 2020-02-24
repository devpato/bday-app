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
  DoneForm = '[Bday] Clear entire form',
  DoneClearData = '[Bday] Clear entire data',
  NewBdayQuestion = '[Bday] Ask if user wants to add a new bday',
  SubmitForm = '[Bday] Submit data to results',
  ToggleResults = '[Bday] Toggle results'
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

export class DoneForm implements Action {
  readonly type = BdayActionTypes.DoneForm;
}

export class DoneClearData implements Action {
  readonly type = BdayActionTypes.DoneClearData;
}

export class SubmitForm implements Action {
  readonly type = BdayActionTypes.SubmitForm;
}

export class ToggleResults implements Action {
  readonly type = BdayActionTypes.ToggleResults;
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
  | DoneForm
  | DoneClearData
  | SubmitForm
  | ToggleResults
  | NewBdayQuestion;