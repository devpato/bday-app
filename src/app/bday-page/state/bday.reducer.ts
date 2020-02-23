import { Question } from '../models/question.model';
import { User } from 'src/app/shared/models/user.model';
import { BdayActions, BdayActionTypes } from "./bday.actions";
import { Bday } from 'src/app/shared/models/bday.model';

const questionsArray = [
  {
    id: 0,
    question: `What is your name?`,
    answer: '',
    type: "name"
  },
  {
    id: 1,
    question: `What is your birth month?`,
    answer: '',
    type: "birthMonth"
  },
  {
    id: 2,
    question: `What day in were you born?`,
    answer: '',
    type: "birthDay"
  },
  {
    id: 3,
    question: `What's your email?`,
    answer: '',
    type: 'email'
  }
]

const questionsArray1 = [
  {
    id: 0,
    question: `What is your name?`,
    answer: '',
    type: "name"
  },
  {
    id: 1,
    question: `What is your birth month?`,
    answer: '',
    type: "month"
  },
  {
    id: 2,
    question: `What day in were you born?`,
    answer: '',
    type: "day"
  },
  {
    id: 3,
    question: `What's your email?`,
    answer: '',
    type: 'email'
  }
]

const defaultUser = {
  userName: '',
  bdays: []
}

export interface BdayState {
  user: User
  questions: Question[];
  error: string;
  currentQuestion: Question | null
}

const initialState: BdayState = {
  user: defaultUser,
  questions: [...questionsArray],
  error: "",
  currentQuestion: questionsArray[0]
};

export function reducer(state = initialState, action: BdayActions) {

  switch (action.type) {

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

      let bday = questionsArray.reduce((ac, { type, answer }) => {
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

    default:
      return state;
  }
}