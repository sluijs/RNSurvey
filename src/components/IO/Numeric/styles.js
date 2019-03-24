//
//  styles.js [Numeric.js]
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
  input: {
    width: '90%',
    borderBottomWidth: 3,
    fontWeight: '600',
    fontSize: 80,
    color: 'darkgrey',
  },
});

export default styles;
