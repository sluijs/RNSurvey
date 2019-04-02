//
//  Basic.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

// Third-party
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

// Components
import Slider from '../../IO/Slider/Slider';
import Numeric from '../../IO/Numeric/Numeric';
import List from '../../IO/Lists/Basic/Basic';

// Layout
import styles from './styles';

/**
 * Render a Slider component. This corresponds to TYPE 1.
 * @param  {number}   minValue Minimally allowed value.
 * @param  {Number}   value    Starting value.
 * @param  {number}   maxValue Maximally allowed value.
 * @param  {Function} cb       Callback on slideEnd.
 */
function renderSlider(
  minValue,
  value,
  maxValue,
  cb,
) {
  return (
    <Slider
      minValue={minValue}
      value={value}
      maxValue={maxValue}
      onSlideComplete={cb}
    />
  );
}

// Type: 3,4 or 9 (Questions that render a list - single, and multiple choice)
function renderList(
  questionId,
  options,
  cb,
  selected,
  single,
) {
  // List expects an array for selected, but single option questions supply a
  // default_option that is an integer, so we need to convert it.
  const s = Array.isArray(selected) ? selected : [selected];
  return (
    <List
      questionId={questionId}
      options={options}
      toggleAnswer={cb}
      selected={s}
      single={single}
    />
  );
}


/**
 * Render a Numeric Input component. This corresponds to TYPE 5.
 * @param  {bool}   obligatory  Is the question obligatory or not.
 * @param  {number}   minValue    Minimally allowed value.
 * @param  {Number}   value       Default value.
 * @param  {Number}   maxValue    Maximally allowed value.
 * @param  {number}   placeholder Placeholder.
 * @param  {Function} cb          Callback onEndEditing.
 */
function renderNumericInput(
  obligatory,
  minValue,
  value,
  maxValue,
  placeholder,
  cb,
) {
  return (
    <Numeric
      obligatory={obligatory}
      minValue={minValue}
      value={value}
      maxValue={maxValue}
      placeholder={placeholder}
      setAnswer={cb}
    />
  );
}

/**
 * BasicQuestion layouts a basic question consisting of a description and an
 * "answer" area.
 * @param {number} questionIndex The current question index.
 * @param {Object} questionnaire The current questionnaire.
 * @param {Object} answers       Answers from the store.
 * @param {Object} actions       Actions to interact with Redux.
 */
const BasicQuestion = ({
  questionIndex,
  questionnaire,
  answers,
  actions,
}) => {
  // Retrieve the question and its answers
  const q = questionnaire.questions[questionIndex];
  const a = answers.filter(answer => answer.questionId === q.question_id);

  // Retrieve question information, needed in the upper part of the layout
  const {
    description,
    type,
    question_id: questionId,
    obligatory,
  } = q;

  return (
    <View style={styles.container}>
      <View>
        <ScrollView
          contentContainerStyle={styles.description}
          alwaysBounceVertical={false}
        >
          <Animatable.Text animation="slideInLeft" duration={350} style={styles.text}>
            {description}
          </Animatable.Text>
        </ScrollView>
      </View>
      <Animatable.View animation="slideInRight" duration={350} style={styles.io}>
        {[1].includes(type) && renderSlider(
          q.min_value, // minValue
          a[0] ? a[0].value : q.default_value, // value
          q.max_value, // maxValue
          val => actions.setAnswer(questionId, val), // cb
        )}
        {[3, 9].includes(type) && renderList(
          questionId,
          q.options,
          // If single choice, toggle click
          (qid, val) => {
            actions.clearQuestion(qid);
            actions.toggleAnswer(qid, val);
          },
          a.map(i => i.value), // supply array with selected answers
          true, // single choice question
        )}
        {[4].includes(type) && renderList(
          questionId,
          q.options,
          actions.toggleAnswer,
          a.map(i => i.value), // supply array with selected answers
        )}
        {[5].includes(type) && renderNumericInput(
          obligatory, // obligatory
          q.min_value, // minValue
          a[0] ? a[0].value : q.default_value, // value
          q.max_value, // maxValue
          q.placeholder, // placeholder
          val => actions.setAnswer(questionId, val), // cb
        )}
      </Animatable.View>
    </View>
  );
};

// Props
BasicQuestion.propTypes = {
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


export default BasicQuestion;
