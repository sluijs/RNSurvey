//
//  Header.js
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
 * A component that is drawn by the HeaderContainer. It typically shows the
 * title of the current question, a refresh button and sometimes a back-button.
 * A back button is can be used to move to a different part of the app, or to
 * dismiss the current view in case of integration in a native app.
 * @param {string} title     Title of the current question
 * @param {Function} onRefresh Handler that is fired when the button is pressed.
 */
const Header = ({ title, onRefresh }) => (
  <View style={styles.container}>
    <Text style={styles.text}>
      {title}
    </Text>
    <WrapperButton onPress={() => onRefresh()} style={styles.right}>
      <Image
        style={styles.image}
        source={require('../../assets/images/ic_refresh_36pt.png')}
      />
    </WrapperButton>
  </View>
);

// Props
Header.propTypes = {
  title: PropTypes.string.isRequired,
  onRefresh: PropTypes.func.isRequired,
};

export default Header;
