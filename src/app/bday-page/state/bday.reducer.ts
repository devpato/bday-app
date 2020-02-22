import { Question } from '../models/question.model';
import { User } from 'src/app/shared/models/user.model';
import { BdayActions, BdayActionTypes } from "./bday.actions";

const questionsArray = [
  {
    id: 0,
    question: `What is your name?`,
    answer: ' '
  },
  {
    id: 1,
    question:  `What is your birth month?`,
    answer: ' '
  },
  {
    id: 2,
    question:  `What day in were you born?`,
    answer: ' '
  },
  {
    id: 3,
    question: `What to add an other birth day`,
    answer: ' '
  }
]

export interface BdayState {
  user: User
  questions: Question[];
  error: string;
  currentQuestion: Question | null
}

const initialState: BdayState = {
  user: null,
  questions: questionsArray,
  error: "",
  currentQuestion: questionsArray[0]
};

export function reducer (state = initialState, action: BdayActions) {
  
  switch (action.type) {
      
    case BdayActionTypes.SetCurrentQuestion: {
      return {
        ...state,
        currentQuestion: action.payload,
        error: "" 
      };
    }

    default:
      return state;
  }
}