//
//  styles.js [Slider.js]
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: '90%',
  },
  track: {
    height: 12,
    borderRadius: 999,
  },
  value: {
    fontWeight: '600',
    fontSize: 80,
    color: 'darkgrey',
  },
});

export default styles;
