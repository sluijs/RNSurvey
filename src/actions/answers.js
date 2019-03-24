//
//  answers.js [actions]
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

import {
  ADD_ANSWER,
  DELETE_ANSWER,
  CLEAR_ALL,
  CLEAR_QUESTION,
  TOGGLE_ANSWER,
  SET_ANSWER,
} from '../constants/types';

/**
 * Get the current date time.
 * @return {string} The current datetime in the format: YY-MM-DD HH:MM:SS.
 */
function now() {
  const tzoffset = (new Date()).getTimezoneOffset() * 60000; // offset in milliseconds
  return (new Date(Date.now() - tzoffset)).toISOString().slice(0, -5).replace('T', ' ');
}

export const addAnswer = (questionId, value) => ({
  type: ADD_ANSWER,
  payload: {
    questionId,
    value,
    timestamp: now(),
  },
});

export const deleteAnswer = (questionId, value) => ({
  type: DELETE_ANSWER,
  payload: {
    questionId,
    value,
  },
});

export const clearQuestion = questionId => ({
  type: CLEAR_QUESTION,
  payload: {
    questionId,
  },
});

export const clearAll = () => ({
  type: CLEAR_ALL,
  payload: true,
});

export const toggleAnswer = (questionId, value) => ({
  type: TOGGLE_ANSWER,
  payload: {
    questionId,
    value,
    timestamp: now(),
  },
});

export const setAnswer = (questionId, value) => ({
  type: SET_ANSWER,
  payload: {
    questionId,
    value,
    timestamp: now(),
  },
});
