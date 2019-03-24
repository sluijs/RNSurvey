//
//  QuestionnaireContainer.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React, { Component } from 'react';

// Third-party
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

// Components
import QuestionPicker from '../components/Questions/Picker/Picker';

// Actions
import {
  setAnswer,
  toggleAnswer,
  clearQuestion,
  clearAll,
} from '../actions/answers';
import { setQuestionIndex } from '../actions/questionnaires';

// Utils
import Answers from '../utilities/Answers';

/**
 * The QuestionnaireContainer renders the actual questionnaire/questions. It is
 * flexible, such that, it can render different types of layouts, depending on
 * the question_id.
 * @extends Component
 */
class QuestionnaireContainer extends Component {
  /**
   * The maximum questionIndex that was visited.
   * @type {Number}
   */
  maxVisitedIndex = 0;

  /**
   * Prefill all questions with their default answers.
   * @param {Object} props Props.
   */
  constructor(props) {
    super(props);

    const { questionnaire, actions } = this.props;
    const { questions } = questionnaire;
    Answers.prefill(questions, actions);
  }

  /**
   * Keep track of the max visited questionIndex.
   */
  componentDidUpdate() {
    const { questionIndex } = this.props;
    if (questionIndex > this.maxVisitedIndex) {
      this.maxVisitedIndex = questionIndex;
    }
  }

  /**
   * Render the QuestionPicker component. This component renders a specific
   * question layout that matches the question_type.
   * @return {Components} A QuestionPicker component.
   */
  render() {
    const {
      actions,
      answers,
      questionIndex,
      questionnaire,
    } = this.props;

    return (
      <QuestionPicker
        questionIndex={questionIndex}
        questionnaire={questionnaire}
        answers={answers}
        actions={actions}
        key={questionIndex}
      />
    );
  }
}

// Props
QuestionnaireContainer.propTypes = {
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
    setQuestionIndex: PropTypes.func.isRequired,
    setAnswer: PropTypes.func.isRequired,
    toggleAnswer: PropTypes.func.isRequired,
    clearQuestion: PropTypes.func.isRequired,
    clearAll: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  questionIndex: state.questionIndex,
  questionnaire: state.questionnaire,
  answers: state.answers,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    setQuestionIndex,
    setAnswer,
    toggleAnswer,
    clearQuestion,
    clearAll,
  }, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionnaireContainer);
