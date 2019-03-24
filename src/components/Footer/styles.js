//
//  styles.js [Footer.js]
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
    // Shadow
    shadowColor: 'black',
    shadowOffset: { width: 0, height: -7 },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 10,
    // Set backgroundColor to apply shadow on the whole box
    backgroundColor: 'white',
  },
  text: {
    color: 'blue',
    fontSize: 18,
    fontWeight: '600',
  },
  last: {
    color: 'green',
  },
  left: {
    position: 'absolute',
    left: 0,
  },
  image: {
    tintColor: 'darkgrey',
    width: 30,
    height: 30,
  },
});

export default styles;
