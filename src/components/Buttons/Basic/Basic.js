import React from 'react';
import { TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Basic = ({
  onPress,
  children,
  activeOpacity,
  style,
}) => (
  <TouchableOpacity
    onPress={() => onPress()}
    style={[styles.button, style]}
    activeOpacity={activeOpacity}
  >
    {children}
  </TouchableOpacity>
);

Basic.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  activeOpacity: PropTypes.number,
  style: ViewPropTypes.style,
};

Basic.defaultProps = {
  activeOpacity: 0.9,
  style: {},
};

export default Basic;
