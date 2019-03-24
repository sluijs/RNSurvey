//
//  HeaderContainer.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React, { Component } from 'react';

// Third-party
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Components
import Header from '../components/Header/Header';

// Actions
import { setQuestionIndex } from '../actions/questionnaires';
import {
  setAnswer,
  toggleAnswer,
  clearQuestion,
  clearAll,
} from '../actions/answers';

// Utils
import Answers from '../utilities/Answers';

/**
 * The HeaderContainer draws the <Header /> component. This component most
 * likely includes a title and a refresh button and sometimes a back button to
 * dismiss the React Native component (in case of integration).
 * @extends Component
 */
class HeaderContainer extends Component {
  /**
   * Restart the survey. Clears all answers, sets the defaults and returns the
   * questionnaire to the first question.
   */
  refresh() {
    const { questionnaire: { questions }, actions } = this.props;
    actions.clearAll();
    Answers.prefill(questions, actions);
    actions.setQuestionIndex(0);
  }

  /**
   * Renders the components in the HeaderContainer, which is in fact just a
   * <Header /> component.
   * @return {<Header>} A <Header /> with props next, prev and isLast.
   */
  render() {
    const { questionIndex, questionnaire } = this.props;
    const { title } = questionnaire.questions[questionIndex];

    return (
      <Header title={title} onRefresh={() => this.refresh()} />
    );
  }
}

// Props
HeaderContainer.propTypes = {
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
};

const mapStateToProps = state => ({
  questionIndex: state.questionIndex,
  questionnaire: state.questionnaire,
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
