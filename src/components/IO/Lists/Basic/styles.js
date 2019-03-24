//
//  styles.js [Basic.js] [Lists]
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // Size
    width: '90%',
    overflow: 'visible',
    // Shadow
    shadowColor: 'lightgrey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.73,
    shadowRadius: 6,
    elevation: 5,
    // Color
    backgroundColor: 'white',
    borderRadius: 3,
  },
  box: {
    flexGrow: 1,
  },
  separator: {
    height: 3,
    width: '100%',
    backgroundColor: 'rgb(249, 249, 249)',
  },
});

export default styles;
