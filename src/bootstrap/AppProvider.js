//
//  AppProvider.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

// Screens
import SurveyScreen from '../screens/SurveyScreen/SurveyScreen';
import ErrorScreen from '../screens/ErrorScreen/ErrorScreen';

// Reducers
import answersReducer from '../reducers/answers';
import {
  questionnaireReducer,
  questionIndexReducer,
} from '../reducers/questionnaires';

// Utilities
import API from '../api/api';

// Middleware
const middleware = [];
if (__DEV__) {
  middleware.push(logger);
}

/**
 * Validate the questionnaire. When correctly formatted, initialize the survey.
 * If not, display an error message.
 */
const res = API.fetchQuestionnaire();
const schema = API.fetchSchema();
const valid = API.validate(res, schema);

/**
 * Provide the SurveyScreen with access to the Redux Store, or - in case of an
 * invalid questionnaire - display the error screen.
 */
const AppProvider = () => {
  if (!valid) {
    return (
      <ErrorScreen message="The supplied questionnaire is invalid." />
    );
  }

  // Redux Store
  const store = createStore(
    combineReducers({
      answers: answersReducer,
      questionIndex: questionIndexReducer,
      questionnaire: questionnaireReducer,
    }),
    {
      questionnaire: res.data.questionnaire,
    },
    applyMiddleware(...middleware),
  );

  return (
    <Provider store={store}>
      <SurveyScreen />
    </Provider>
  );
};

export default AppProvider;
