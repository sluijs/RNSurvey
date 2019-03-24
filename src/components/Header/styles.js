//
//  styles.js [Header.js]
//  RNSurvey
//
//  Created by Rogier van der Sluijs on 23/03/2019.
//  Copyright © 2019 Rogier van der Sluijs. All rights reserved.
//

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    // Flex
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // Size
    alignSelf: 'stretch',
    height: 60,
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: '900',
  },
  right: {
    position: 'absolute',
    right: 0,
  },
  image: {
    tintColor: 'blue',
    width: 30,
    height: 30,
  },
});

export default styles;
