//
//  styles.js [BasicRows]
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    paddingLeft: 8,
    paddingRight: 8,
  },
  text: {
    fontSize: 16,
  },
  active: {
    backgroundColor: 'lightblue',
  },
});

export default styles;
