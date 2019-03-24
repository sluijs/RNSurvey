//
//  Slider.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Third-party
import Slider from 'react-native-slider';
import PropTypes from 'prop-types';

// Layout
import styles from './styles';

/**
 * This is a slider component that can be used to pick a int or float. The store
 * is updated when the slide is completed.
 * @extends Component
 */
class NumberSlider extends Component {
  state = {
    currentValue: null,
  };

  render() {
    const { currentValue } = this.state;
    const {
      minValue,
      value,
      maxValue,
      onSlideComplete,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.value}>
          {Math.round(currentValue || value, 0)}
        </Text>
        <Slider
          style={styles.slider}
          trackStyle={styles.track}
          onValueChange={val => this.setState({ currentValue: val })}
          onSlidingComplete={val => onSlideComplete(val)}
          maximumValue={maxValue}
          minimumValue={minValue}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="darkgrey"
          value={currentValue || value}
          thumbTintColor="blue"
        />
      </View>
    );
  }
}

// Props
NumberSlider.propTypes = {
  minValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  onSlideComplete: PropTypes.func.isRequired,
};

export default NumberSlider;
