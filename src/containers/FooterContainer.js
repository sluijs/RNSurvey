//
//  FooterContainer.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React, { Component } from 'react';
import { Alert } from 'react-native';

// Third-party
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Footer from '../components/Footer/Footer';

// Actions
import { setQuestionIndex } from '../actions/questionnaires';
import {
  setAnswer,
  toggleAnswer,
  clearQuestion,
  clearAll,
} from '../actions/answers';

// Utils
import API from '../api/api';
import Answers from '../utilities/Answers';

/**
 * The FooterContainer facilitates the navigation *within* the survey. It uses
 * a JSON object with questionnaire information to determine the previous and
 * next question. Furthermore, it anticipates on the final question in a user-
 * specified way, which could be for example, sending the results to a backend.
 * @extends Component
 */
class FooterContainer extends Component {
  /**
   * Navigate to the previous question, if available.
   * @return {Bool}     Indication of success.
   */
  prev() {
    const { questionIndex, actions } = this.props;

    if (questionIndex !== 0) {
      actions.setQuestionIndex(questionIndex - 1);
      return true;
    }
    return false;
  }

  /**
   * Navigate to the next question, or finish the questionnaire if the current
   * question is the last question.
   */
  next() {
    const { questionIndex, actions, questionnaire } = this.props;
    const { questions } = questionnaire;

    if ((questionIndex + 1) < questions.length) {
      actions.setQuestionIndex(questionIndex + 1);
    } else {
      // This is the last question, we need to present the user the option to
      // end the questionnaire.
      Alert.alert(
        'Thank you!',
        'You finished the survey. Press "Confirm" to submit your results.',
        [
          { text: 'Cancel', onPress: () => {}, style: 'cancel' },
          {
            text: 'Confirm',
            onPress: () => this.finish(),
            style: 'cancel',
          },
        ],
        { cancelable: false },
      );
    }
  }

  /**
   * Submit the answers and reset the questionnaire.
   */
  finish() {
    const { actions, answers, questionnaire: { questions } } = this.props;
    API.submitAnswers(answers);
    actions.clearAll();
    Answers.prefill(questions, actions);
    actions.setQuestionIndex(0);
  }

  /**
   * Renders the components in the FooterContainer, which is in fact just a
   * <Footer /> component.
   * @return {<Footer>} A <Footer /> with props next, prev and isLast.
   */
  render() {
    const { questionIndex, questionnaire: { questions } } = this.props;

    return (
      <Footer
        next={() => this.next()}
        prev={() => this.prev()}
        isLast={(questionIndex + 1) === questions.length}
      />
    );
  }
}

// Props
FooterContainer.propTypes = {
  questionIndex: PropTypes.number.isRequired,
  questionnaire: PropTypes.shape({
    questionnaire_id: PropTypes.number.isRequired,
    questions: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      obligatory: PropTypes.bool.isRequired,
    })).isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    setQuestionIndex: PropTypes.func.isRequired,
    setAnswer: PropTypes.func.isRequired,
    toggleAnswer: PropTypes.func.isRequired,
    clearQuestion: PropTypes.func.isRequired,
    clearAll: PropTypes.func.isRequired,
  }).isRequired,
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      questionId: PropTypes.number.isRequired,
      value: PropTypes.number,
      timestamp: PropTypes.string.isRequired,
    }),
  ).isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);
