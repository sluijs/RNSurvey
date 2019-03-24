import {
  ADD_ANSWER,
  DELETE_ANSWER,
  CLEAR_ALL,
  CLEAR_QUESTION,
  SET_ANSWER,
  TOGGLE_ANSWER,
} from '../constants/types';

export default function answersReducer(state = [], action) {
  switch (action.type) {
    // Push an answer to the answers array
    case ADD_ANSWER:
      return [...state, action.payload];

    // Remove answers with questionId and the exact same value, this is the
    // preferred way of removing a single- or multiple-choice question
    case DELETE_ANSWER:
      return [...state].filter(answer => (
        answer.questionId !== action.payload.questionId
        || answer.value !== action.payload.value
      ));

    // If an answer with the same questionId and value already exists, then
    // remove it, else add it; this is the default for multiple-choice questions
    case TOGGLE_ANSWER: {
      const clone = [...state];
      const idx = state.findIndex(answer => (
        answer.questionId === action.payload.questionId
        && answer.value === action.payload.value
      ));
      if (idx > -1) {
        clone.splice(idx, 1);
        return clone;
      }
      return [...state, action.payload];
    }
    // Remove all answers for a given questionId, and replace it with one new
    // answer
    case SET_ANSWER:
      return [...state].filter(answer => (
        answer.questionId !== action.payload.questionId
      )).concat(action.payload);

    // Clear all answers from one specific questionId
    case CLEAR_QUESTION:
      return [...state].filter(answer => (
        answer.questionId !== action.payload.questionId
      ));

    case CLEAR_ALL:
      return [];

    default:
      return state;
  }
}
