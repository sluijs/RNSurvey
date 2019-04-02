//
//  styles.js [Checkbox.js]
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 02/04/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//


import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  outerView: {
    // Layout
    alignItems: 'center',
    justifyContent: 'center',
    // Size
    width: 21,
    height: 21,
    // Border
    borderWidth: 2,
    borderColor: 'lightgrey',
  },
  innerView: {
    // Size
    width: 13,
    height: 13,
    // Background
    backgroundColor: 'white',
  },
  active: {
    borderColor: 'white',
  },
});

export default styles;
