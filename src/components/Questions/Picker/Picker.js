//
//  Picker.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React from 'react';
import { View } from 'react-native';

// Third-party
import PropTypes from 'prop-types';

// Components
import BasicQuestion from '../Basic/Basic';

// Layout
import styles from './styles';

/**
 * This component chooses which question component it needs to draw, based on
 * the type of question. This enables theming, specialized layouts (such as
 * maps) and fallback mechanisms based on the status of such a specialized
 * question component.
 * @param {int} questionIndex    Index of the question.
 * @param {Object} questionnaire Questionnaire.
 * @param {Object} answers       Answers.
 * @param {Object} actions       Actions.
 */
const QuestionPicker = ({
  questionIndex,
  questionnaire,
  answers,
  actions,
}) => {
  const { type } = questionnaire.questions[questionIndex];
  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5, 6, 7].includes(type)
        && (
          <BasicQuestion
            questionIndex={questionIndex}
            questionnaire={questionnaire}
            answers={answers}
            actions={actions}
          />
        )
      }
    </View>
  );
};

// Props
QuestionPicker.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  questionnaire: PropTypes.shape({
    questionnaire_id: PropTypes.number.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        obligatory: PropTypes.bool.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      questionId: PropTypes.number.isRequired,
      value: PropTypes.number,
      timestamp: PropTypes.string.isRequired,
    }),
  ).isRequired,
  actions: PropTypes.shape({
    setAnswer: PropTypes.func.isRequired,
    toggleAnswer: PropTypes.func.isRequired,
    clearQuestion: PropTypes.func.isRequired,
  }).isRequired,
};

export default QuestionPicker;
