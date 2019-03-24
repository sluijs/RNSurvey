//
//  questionnaires.js [reducers]
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

import {
  LOAD_QUESTIONNAIRE,
  SET_QUESTION_INDEX,
} from '../constants/types';

/**
 * Reduce the LOAD_QUESTIONNAIRE action. Typically happens at start-up.
 * @param  {Object}  state     (Set) the current state.
 * @param  {Object} action     The payload should contain a JSON survey.
 * @return {Object}            A JSON survey/questionnaire or an empty object.
 */
export function questionnaireReducer(state = {}, action) {
  switch (action.type) {
    case LOAD_QUESTIONNAIRE:
      return action.payload;
    default:
      return state;
  }
}

/**
 * Reduce the SET_QUESTION_INDEX action. Can be used to navigate within the
 * survey.
 * @param  {Number} [state=0] The current question index.
 * @param  {Object} action    An object with a question index int as payload.
 * @return {Number}           The question index in the current state.
 */
export function questionIndexReducer(state = 0, action) {
  switch (action.type) {
    case SET_QUESTION_INDEX:
      return action.payload.index;
    default:
      return state;
  }
}
