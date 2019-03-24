//
//  Error.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React from 'react';
import { Text, View } from 'react-native';

// Third-party
import PropTypes from 'prop-types';

// Layout
import styles from './styles';

/**
 * The Error component displays a simple error message and grows to fully fit
 * its parent view container.
 * @param {string} message Error message.
 */
const Error = ({ message }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {message}
    </Text>
  </View>
);

// Props
Error.defaultProps = {
  message: 'A fatal error occured.',
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
