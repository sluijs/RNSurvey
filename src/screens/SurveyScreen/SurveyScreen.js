//
//  SurveyScreen.js
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

// React
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

// Containers
import HeaderContainer from '../../containers/HeaderContainer';
import QuestionnaireContainer from '../../containers/QuestionnaireContainer';
import FooterContainer from '../../containers/FooterContainer';

// Layout
import styles from './styles';

/**
 * The SurveyScreen combines the three most important elements of a RNSurvey:
 * a header (back button, question title), the questionnaire (question
 * description and most likely an input to answer the question) and a footer
 * to navigate within the survey. These three elements are containers, since
 * they communicate with the Redux store.
 */
const SurveyScreen = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar hidden />
    <HeaderContainer />
    <QuestionnaireContainer />
    <FooterContainer />
  </SafeAreaView>
);

export default SurveyScreen;
