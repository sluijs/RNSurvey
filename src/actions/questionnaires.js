//
//  questionnaires.js [actions]
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// Constants
import {
  LOAD_QUESTIONNAIRE,
  SET_QUESTION_INDEX,
} from '../constants/types';

/**
 * Create an action that sets the questionnaire in the Redux store.
 * @param  {Object} questionnaire A questionnaire with a pre-specified format.
 * @return {Object}               An action with the questionnare as payload.
 */
export const loadQuestionnaire = questionnaire => ({
  type: LOAD_QUESTIONNAIRE,
  payload: {
    questionnaire,
  },
});

/**
 * Create an action that sets the current question index.
 * @param {uint} index Index of the question in the questions array of the
 * questionnaire object.
 * @return {Object}    An action with the index as payload.
 */
export const setQuestionIndex = index => ({
  type: SET_QUESTION_INDEX,
  payload: {
    index,
  },
});
