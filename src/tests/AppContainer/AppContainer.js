import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAnswer, deleteAnswer } from '../../actions/answers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const renderAnswerList = answers => answers.map(answer => (
  <Text>
    {`Vraag: ${answer.questionId},
    optie: ${answer.optionId},
    waarde: ${answer.value}.`}
  </Text>
));

const AppContainer = ({ answers, onAddAnswer, onDeleteAnswer }) => (
  <View style={styles.container}>
    {renderAnswerList(answers)}
    <TouchableOpacity onPress={() => onAddAnswer(3, 2, 1)}>
      <Text>
        Voeg antwoord toe
      </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onDeleteAnswer(3, 1)}>
      <Text>
        Verwijder antwoord
      </Text>
    </TouchableOpacity>
  </View>
);

AppContainer.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      questionId: PropTypes.number.isRequired,
      optionId: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onAddAnswer: PropTypes.func.isRequired,
  onDeleteAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  answers: state.answers,
});

const mapDispatchToProps = dispatch => ({
  onAddAnswer: (questionId, value, optionId = 0) => {
    dispatch(addAnswer(questionId, value, optionId));
  },
  onDeleteAnswer: (questionId, optionId) => {
    dispatch(deleteAnswer(questionId, optionId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
