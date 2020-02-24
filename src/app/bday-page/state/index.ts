import * as fromRoot from "../../state/app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BdayState } from "./bday.reducer";

export interface State extends fromRoot.State {
  bday: BdayState;
}

/*Selector */

const getBdayFeatureState = createFeatureSelector<BdayState>("bday");

export const getQuestions = createSelector(
  getBdayFeatureState,
  state => state.questions
);

export const getCurrentQuestion = createSelector(
  getBdayFeatureState,
  state => {
    return state.currentQuestion
  }
);

export const getAnswerNewBdayQuestion = createSelector(
  getBdayFeatureState,
  state => {
    return state.answerNew
  }
);

export const getResults = createSelector(
  getBdayFeatureState,
  state => {
    return state.user
  }
);

export const showResults = createSelector(
  getBdayFeatureState,
  state => {
    return state.showResults
  }
);

