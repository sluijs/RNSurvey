//
//  Checkbox.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 02/04/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React, { Component } from 'react';
import { Animated, Easing, View } from 'react-native';

// Third-party
import PropTypes from 'prop-types';

// Layout
import styles from './styles';

/**
 * A component that draws a checkbox or a radio button. This particular checkbox
 * only responds to function calls from outside the component. A radio button
 * style can be achieved by passing the radio attribute.
 */
class Checkbox extends Component {
  /**
   * Initialize the state with the starting size of the inner view of the box
   * @param {object} props Props
   */
  constructor(props) {
    super(props);

    const { min } = this.props;
    this.state = {
      growthAnim: new Animated.Value(min),
    };
  }

  /**
   * Check the box if the item was already selected
   */
  componentWillMount() {
    const { checked } = this.props;
    if (checked) this.checkBox();
  }

  /**
   * If the checked status changes, update the checkbox
   * @param  {[type]} prev Props from the previous intialization
   */
  componentDidUpdate(prev) {
    const { checked } = this.props;
    if (prev.checked !== checked) {
      if (checked) {
        this.checkBox();
      } else {
        this.uncheckBox();
      }
    }
  }

  /**
   * Check the box using a backwards exponential easing function
   */
  checkBox() {
    const { max } = this.props;
    const { growthAnim } = this.state;

    Animated.timing(
      growthAnim,
      {
        toValue: max,
        easing: Easing.exp.out,
        duration: 200,
      },
    ).start();
  }

  /**
   * Uncheck the box using a backwards exponential easing function
   */
  uncheckBox() {
    const { min } = this.props;
    const { growthAnim } = this.state;

    Animated.timing(
      growthAnim,
      {
        toValue: min,
        easing: Easing.exp.out,
        duration: 100,
      },
    ).start();
  }

  /**
   * Render the checkbox and make it a radio button if the radio attribute was
   * set.
   */
  render() {
    const { growthAnim } = this.state;
    const { max, radio, checked } = this.props;
    const innerBorderRadius = radio ? max : 3;
    const outerBorderRadius = radio ? max : 5;

    return (
      <View style={[
        styles.outerView,
        {
          width: max + 8,
          height: max + 8,
          borderRadius: outerBorderRadius,
        },
        checked ? styles.active : null,
      ]}
      >
        <Animated.View style={{
          ...styles.innerView,
          width: growthAnim,
          height: growthAnim,
          borderRadius: innerBorderRadius,
        }}
        />
      </View>
    );
  }
}

// Props
Checkbox.defaultProps = {
  min: 0,
  max: 13,
  radio: false,
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  radio: PropTypes.bool,
};

export default Checkbox;
