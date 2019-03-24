//
//  Footer.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React from 'react';
import { Image, Text, View } from 'react-native';

// Third-party
import PropTypes from 'prop-types';

// Components
import WrapperButton from '../Buttons/Wrapper/Wrapper';

// Layout
import styles from './styles';

/**
 * A component that is drawn by the FooterContainer. It usually has navigation
 * buttons, and has a different style for the last question.
 * @param {Function} prev   Function to invoke the previous question.
 * @param {Function} next   Function to invoke the next question.
 * @param {Boolean}  isLast Boolean indicator of the last question.
 */
const Footer = ({ prev, next, isLast }) => (
  <View style={styles.container}>
    <WrapperButton onPress={() => prev()} style={styles.left}>
      <Image
        style={styles.image}
        source={require('../../assets/images/ic_chevron_left_36pt.png')}
      />
    </WrapperButton>
    <WrapperButton onPress={() => next()}>
      {!isLast && (
      <Text style={styles.text}>
        Next
      </Text>
      )}
      {isLast && (
      <Text style={[styles.text, styles.last]}>
        Send
      </Text>
      )}
    </WrapperButton>
  </View>
);

// Props
Footer.defaultProps = {
  isLast: false,
};

Footer.propTypes = {
  prev: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  isLast: PropTypes.bool,
};

export default Footer;
