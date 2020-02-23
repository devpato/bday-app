import { Question } from '../models/question.model';
import { User } from 'src/app/shared/models/user.model';
import { BdayActions, BdayActionTypes, FailLoadQuestions } from "./bday.actions";

export interface BdayState {
  user: User
  questions: Question[];
  error: string;
  currentQuestion: Question | null
}

const initialState: BdayState = {
  user: {
    userName: '',
    bdays: []
  },
  questions: [],
  error: "",
  currentQuestion: null
};

export function reducer(state = initialState, action: BdayActions) {

  switch (action.type) {

    case BdayActionTypes.SuccessLoadQuestions: {
      return {
        ...state,
        questions: action.payload['questions'],
        currentQuestion: action.payload['questions'][0],
        error: ""
      };
    }

    case BdayActionTypes.FailLoadQuestions: {
      return {
        ...state,
        error: action.payload
      };
    }

    case BdayActionTypes.SetCurrentQuestion: {
      return {
        ...state,
        currentQuestion: action.payload,
        error: ""
      };
    }

    case BdayActionTypes.SaveQuestion: {
      return {
        ...state,
        questions: state.questions.map(q => action.payload.id === q.id ? action.payload : q),
        error: ""
      };
    }

    case BdayActionTypes.AddNewBday: {

      let bday = state.questions.reduce((ac, { type, answer }) => {
        ac[type] = answer;
        return ac;
      }, {});

      return {
        user: {
          userName: bday['name'],
          bdays: [...state.user.bdays, bday]
        },
        error: ""
      }
    }
    case BdayActionTypes.ClearBdayData: {
      return {
        ...state,
        user: {
          userName: '',
          bdays: []
        },
        currentQuestion: null
      };
    }

    default:
      return state;
  }
}