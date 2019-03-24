//
//  ErrorScreen.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

// Third-party
import PropTypes from 'prop-types';

// Components
import Error from '../../components/Error/Error';

// Layout
import styles from './styles';

/**
 * The ErrorScreen is only invoked in case of a fatal error. This usually means
 * that the questionnaire could not be fetched, or its content is invalid.
 */
const ErrorScreen = ({ message }) => (
  <SafeAreaView style={styles.container}>
    <StatusBar hidden />
    <Error message={message} />
  </SafeAreaView>
);

// Props
ErrorScreen.defaultProps = {
  message: 'A fatal error occured.',
};

ErrorScreen.propTypes = {
  message: PropTypes.string,
};

export default ErrorScreen;
