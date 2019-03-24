//
//  Numeric.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React, { Component } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// Third-party
import PropTypes from 'prop-types';

// Layout
import styles from './styles';

// Utils
function toStrOrNull(v) {
  return typeof v === 'string' || v instanceof String || Number.isInteger(v)
    ? v.toString() : null;
}

class Numeric extends Component {
  /**
   * Initialize the state with the value supplied by the props.
   * @param {Object} props Props.
   */
  constructor(props) {
    super(props);
    const { value } = this.props;
    this.state = {
      currentValue: toStrOrNull(value),
    };
  }

  onChangeVal(input) {
    const { minValue, maxValue } = this.props;
    const i = input.match(/^\d+/g);

    if (i !== null && i[0] >= minValue && i[0] <= maxValue) {
      this.setState({ currentValue: i[0] });
    } else {
      this.setState({ currentValue: '' });
    }
  }
  // If one dismisses the keyboard, or moves away otherwise, set the answer
  // if it's valid, else do nothing
  onEditComplete() {
    const { setAnswer } = this.props;
    const { currentValue } = this.state;
    if (this.isValid(currentValue)) {
      setAnswer(Number.parseInt(currentValue, 10));
    } else {
      setAnswer(null);
    }
  }

  isValid() {
    const { currentValue } = this.state;
    const v = Number.parseInt(currentValue, 10);
    const { minValue, maxValue, obligatory } = this.props;

    // Two valid scenarios: no input, obligatory = false, or correct input
    return (!!v !== false && v >= minValue && v <= maxValue)
      || (!!v === false && !obligatory);
  }

  render() {
    // Destructure state and props
    const { value, maxValue, placeholder } = this.props;
    const { currentValue } = this.state;

    // Set the placeholder and value
    const p = toStrOrNull(placeholder);
    const v = toStrOrNull(value);

    return (
      <KeyboardAvoidingView
        keyboardVerticalOffset={285}
        behavior="padding"
        style={styles.container}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => Keyboard.dismiss()}
          style={styles.container}
        >
          <TextInput
            style={[
              styles.input,
              { borderColor: this.isValid() ? 'blue' : 'red' },
            ]}
            onChangeText={val => this.onChangeVal(val)}
            onBlur={() => this.onEditComplete()}
            textAlign="center"
            value={currentValue}
            defaultValue={v}
            placeholder={p}
            autoCorrect={false}
            autoFocus={false}
            caretHidden
            maxLength={maxValue.toString().length}
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
          />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

// Props
Numeric.defaultProps = {
  value: null,
  placeholder: null,
};

Numeric.propTypes = {
  obligatory: PropTypes.bool.isRequired,
  minValue: PropTypes.number.isRequired,
  value: PropTypes.number, // optional!
  maxValue: PropTypes.number.isRequired,
  placeholder: PropTypes.number, // optional!
  setAnswer: PropTypes.func.isRequired,
};

export default Numeric;
