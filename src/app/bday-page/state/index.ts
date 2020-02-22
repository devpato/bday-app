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
  state => state.questions //proyector function
);

export const getCurrentQuestion = createSelector(
  getBdayFeatureState,
state => state.currentQuestion //proyector function
);
