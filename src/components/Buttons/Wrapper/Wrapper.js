//
//  Wrapper.js [Button]
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React from 'react';
import { TouchableOpacity, ViewPropTypes } from 'react-native';

// Third-party
import PropTypes from 'prop-types';

// Layout
import styles from './styles';

/**
 * A wrapper that creates a button from the supplied `children` argument. It
 * provides some of the original props of the TouchableOpacity component.
 * @param {Function} onPress      On press action handler.
 * @param {Object} children       Anything that can be buttonified.
 * @param {Boolean} disabled      Whether the button needs to be disabled.
 * @param {Float} activeOpacity   Opacity of the button when clicked.
 * @param {Object} style          CSS styling.
 */
const Wrapper = ({
  onPress,
  children,
  disabled,
  activeOpacity,
  style,
}) => (
  <TouchableOpacity
    onPress={() => onPress()}
    style={[styles.container, style]}
    activeOpacity={activeOpacity}
    disabled={disabled}
  >
    {children}
  </TouchableOpacity>
);

// Props
Wrapper.defaultProps = {
  disabled: false,
  activeOpacity: 0.7,
  style: {},
};

Wrapper.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  activeOpacity: PropTypes.number,
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
};

export default Wrapper;
